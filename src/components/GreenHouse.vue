<template>
    <div id="container">
        <!-- <input type="text" v-model="text">
        <button @click="changeText(text, humidText)">hej</button> -->
    </div>
</template>

<script>

import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { Reflector } from 'three/addons/objects/Reflector.js';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://wexteras-ae025-default-rtdb.europe-west1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Initialize Realtime Database and get a reference to the service
const loader = new GLTFLoader();


export default {
    name: 'GreenHouse',
    data () {
        return {
            
            scene: null,
            camera: null,
            renderer: null,
            model: null,
            tempText: null,
            humidText: null,
            fanSpeedText: null,
            font: null,
            humidText: null,
            fanText: null,
            leavesMaterial: null,
            clock: null,
            raycaster: null,
            pointer: null,
            text: null,
            controls: null,
            groundMirror: null,
            fan: null,
            isFanSpinning: false,
            targetQuaternion: null,
            rainDrops: [],
        }
    },
    methods: {
        start : function() {

            this.container = document.getElementById('container');
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera( 75, container.clientWidth/container.clientHeight, 0.1, 1000 );
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(container.clientWidth, container.clientHeight);
            this.renderer.setClearColor('skyblue');
            const mainLight = new THREE.DirectionalLight(0xffffff, 5);
            // this.updateCubeMap(this.renderer, this.scene);

            mainLight.position.set(10, 10, 10);

            // const hemisphereLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 5);
            this.scene.add(mainLight);

            container.appendChild( this.renderer.domElement );
            
            loader.load( '/models/greenhouse.gltf', (gltf) => {
                
                let model = gltf.scene
                let newMaterial = new THREE.MeshStandardMaterial({color: "rgb(0, 0, 0)"});
                model.traverse((o) => {
                    if (o.isMesh){
                        o.material = newMaterial;
                    }
                });
                this.scene.add(model)
                this.model = model
                let box3 = new THREE.Box3().setFromObject(this.model)

                let measure = new THREE.Vector3();
                let box = box3.getSize(measure);
                // console.log( box.y );
                this.model.position.y -= box.y/2
                const ledLight = new THREE.AmbientLight("#3fba0f", 10);
                ledLight.position.set(0, 0, 0)
                this.model.attach(ledLight)
                // this.physics.addMesh( this.model );
                this.loadGrass()
                this.loadPlane(box)
                this.loadButton()
                // this.loadGlass(box)
            })

            loader.load('/models/fan.gltf', (gltf) => {
                this.fan = gltf.scene
                this.fan.rotateX( - Math.PI / 2);
                this.fan.position.y = .67;
                this.fan.position.x = 1.15;
                this.fan.position.z = 0.5;
                this.scene.add(this.fan)
                
            })
            const glassMat = new THREE.MeshStandardMaterial( { opacity: 0.3, transparent: true, color: '#ffffff'} );

            loader.load('/models/glassdoor.gltf', (gltf) => {
                this.roof = gltf.scene;
                this.roof.traverse((o) => {
                    if (o.isMesh) o.material = glassMat;
                });
                this.roof.position.x = 1.15;
                this.roof.position.y = .9;
                this.roof.position.z = -1.5;
                this.scene.add(this.roof)
            })

            this.loadRain()
            
            this.raycaster = new THREE.Raycaster();
            this.pointer = new THREE.Vector2();
           

            this.camera.position.z = 7;
            this.camera.position.y = 3;
            this.controls = new OrbitControls(this.camera, document.getElementById("container"));
            // this.controls.minDistance = 6;
            // this.controls.maxDistance = 10;
            this.controls.maxPolarAngle = Math.PI/2; 
            // this.controls.enablePan = false;
            // this.controls.update();

            const fontLoader = new FontLoader()

            fontLoader.load('/fonts/Oswald_Regular.json', (font)  => {
                this.font = font;
                const tempGeo = new TextGeometry('Loading temp...', {
                    font: font,
                    size: 0.5,
                    height: 0.125
                })

                const tempText = new THREE.Mesh(tempGeo, [
                    new THREE.MeshBasicMaterial({color: '#09b342'}),
                    new THREE.MeshBasicMaterial({color: '#0c993b'})
                ])

                const humidGeo = new TextGeometry('Loading humid...', {
                    font: font,
                    size: 0.5,
                    height: 0.125
                })
                
                const humidText = new THREE.Mesh(humidGeo, [
                    new THREE.MeshBasicMaterial({color: 0xad4000}),
                    new THREE.MeshBasicMaterial({color: 0x5c2301})
                ])

                this.tempText = tempText
                this.humidText = humidText
                // this.fanText = fanText

                this.tempText.position.y = -1.6
                this.humidText.position.y = -1.6
                // this.fanText.position.y = -1.6

                this.tempText.position.x += 2.5
                this.humidText.position.x += 2.5
                // this.fanText.position.x += 2.5

                this.tempText.position.z -= 0.5
                this.humidText.position.z += 0.5
                // this.fanText.position.z = 0

                this.tempText.rotateX( - Math.PI / 2);
                this.humidText.rotateX( - Math.PI / 2);
                // this.fanText.rotateX( - Math.PI / 2);
                
                this.scene.add(this.tempText, this.humidText)
            })

            

        },
        // loadGlass: function (box) {
        //     const glassMat = new THREE.MeshStandardMaterial( { opacity: 0.3, transparent: true, color: 'white'} );

        //     loader.load('/models/glass.gltf', (gltf) => {
        //         let glass = gltf.scene
        //         glass.position.y = -box.y/2
        //         glass.traverse((o) => {
        //             if (o.isMesh) o.material = glassMat;
        //         });
        //         this.scene.add(glass)
        //     })
        // },
        loadGrass: function() {
            this.clock = new THREE.Clock()
            
            const vertexShader = `
                varying vec2 vUv;
                uniform float time;
                
                void main() {

                vUv = uv;
                
                // VERTEX POSITION
                
                vec4 mvPosition = vec4( position, 1.0 );
                #ifdef USE_INSTANCING
                    mvPosition = instanceMatrix * mvPosition;
                #endif
                
                // DISPLACEMENT
                
                // here the displacement is made stronger on the blades tips.
                float dispPower = 1.0 - cos( uv.y * 3.1416 / 2.0 );
                
                float displacement = sin( mvPosition.z + time * 10.0 ) * ( 0.05 * dispPower );
                mvPosition.z += displacement;
                
                //
                
                vec4 modelViewPosition = modelViewMatrix * mvPosition;
                gl_Position = projectionMatrix * modelViewPosition;

                }
            `;
            
            const fragmentShader = `
            varying vec2 vUv;
            
            void main() {
                vec3 baseColor = vec3( 0.41, 1.0, 0.5 );
                float clarity = ( vUv.y * 0.5 ) + 0.5;
                gl_FragColor = vec4( baseColor * clarity, 1 );
            }
            `;

            const uniforms = {
                time: {
                value: 0
                }
            }

            this.leavesMaterial = new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms,
                side: THREE.DoubleSide
            })

            const instanceNumber = 1250;
            const dummy = new THREE.Object3D();

            const geometry = new THREE.PlaneGeometry( 0.1, 0.25, 1, 4 );
            geometry.translate( 0, 0, 0 ); // move grass blade geometry lowest point at 0.

            const instancedMesh = new THREE.InstancedMesh( geometry, this.leavesMaterial, instanceNumber );
            // this.scene.add( instancedMesh );
            
            this.model.attach(instancedMesh)
            

            for ( let i=0 ; i<instanceNumber ; i++ ) {

                dummy.position.set(
                ( Math.random() - 0.5 ) * 2.5,
                0,
                ( Math.random() - 0.5 ) * 2.5
                );

                dummy.scale.setScalar( 0.5 + Math.random() * 0.5 );

                dummy.rotation.y = Math.random() * Math.PI;

                dummy.updateMatrix();
                instancedMesh.setMatrixAt( i, dummy.matrix );

            }
            instancedMesh.position.y = 0.6;
        },
        loadWater: function () {
            const instanceNumber = 1250;
            const dummy = new THREE.Object3D();

            const geometry = new THREE.PlaneGeometry( 0.1, 0.25, 1, 4 );
            geometry.translate( 0, 0, 0 ); // move grass blade geometry lowest point at 0.

            const instancedMesh = new THREE.InstancedMesh( geometry, this.leavesMaterial, instanceNumber );
            // this.scene.add( instancedMesh );
            
            this.model.attach(instancedMesh)
            

            for ( let i=0 ; i<instanceNumber ; i++ ) {

                dummy.position.set(
                ( Math.random() - 0.5 ) * 2.5,
                0,
                ( Math.random() - 0.5 ) * 2.5
                );

                dummy.scale.setScalar( 0.5 + Math.random() * 0.5 );

                dummy.rotation.y = Math.random() * Math.PI;

                dummy.updateMatrix();
                instancedMesh.setMatrixAt( i, dummy.matrix );

            }
            instancedMesh.position.y = 0.6;
        },
        loadPlane: function(box) {
            const geometry = new THREE.PlaneGeometry( 100.1, 100.1 );
				let groundMirror = new Reflector( geometry, {
					clipBias: 0.003,
					textureWidth: window.innerWidth * window.devicePixelRatio,
					textureHeight: window.innerHeight * window.devicePixelRatio,
					// color: '#a4b3ab',
                    // transparent: true, 
				} );
                const planeGeo = new THREE.CircleGeometry( 100, 100 );

                // const texture = new THREE.TextureLoader().load( '/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-63641.jpg' );
                const planeMat = new THREE.MeshStandardMaterial( { metalness: 1, roughness: 0.5, opacity: 0.6, transparent: true} );
                const plane = new THREE.Mesh( planeGeo, planeMat );
                // const wallGeo = new THREE.PlaneGeometry( 100.1, 10 );


                groundMirror.position.y = -box.y/2-0.35
                plane.position.y = -box.y/2 +.01-0.35
                // plane.position.y = groundMirror.position.y + 1
                // groundMirror.attach(plane)
                plane.rotateX( - Math.PI / 2);
                groundMirror.rotateX( - Math.PI / 2);
                this.scene.add(plane)
                this.scene.add( groundMirror );
        },
        loadButton: function() {
            
        },
        loadRain: function () {
            const rainDropsNumber = 50;
            const geometryBox = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
            const rainMat = new THREE.MeshBasicMaterial({color: "rgb(0, 0, 255)"})
            
            for ( let i = 0; i < rainDropsNumber; i ++ ) {

                let rainDrop = new THREE.Mesh(geometryBox, rainMat);
                // rainDrop.position.x = Math.random() * (2 - 2) + 2;
                // rainDrop.position.y = Math.random() * 10
                // rainDrop.position.z = Math.random() * (2 - 2) + 2;
                rainDrop.position.set(( Math.random() - 0.5 ) * 2.5,  Math.random() * (0.8),( Math.random() - 0.5 ) * 2.5);
                rainDrop.time = Math.random()*100;
                this.rainDrops.push(rainDrop);
            }
        },
        animate: function () {
            requestAnimationFrame( this.animate );
            if (this.leavesMaterial) {
                this.leavesMaterial.uniforms.time.value = this.clock.getElapsedTime();
                this.leavesMaterial.uniformsNeedUpdate = true;
            }
            // this.boxes.position.y -= 0.03*this.clock.getElapsedTime();
            // let test = this.rainDrops
            this.rainDrops.forEach((drop) => {
                if (drop.position.y < -1) {
                    drop.position.set(( Math.random() - 0.5 ) * 2.5, Math.random() * (0.8),( Math.random() - 0.5 ) * 2.5); 
                    drop.time=0; 
                } 
                drop.time +=1; 
                drop.position.y -= 0.0005*drop.time;
            })

            if (this.isFanSpinning && this.fan) this.fan.rotation.z +=0.1
            if (this.roof && this.targetQuaternion) this.roof.quaternion.slerp(this.targetQuaternion, 0.01);
            this.renderer.render( this.scene, this.camera );
        },
        changeText: function(value, model) {
            const geo = new TextGeometry(String(value), {
                font: this.font,
                size: 0.5,
                height: 0.125
            })
            model.geometry = geo
        },
        rotateRoof: function(dir) {
            if (dir) {
                // this.roof.rotation.x = -Math.PI/20; 
                this.targetQuaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3( 1, 0, 0 ), -Math.PI / 20)
                
            }
            else {
                this.targetQuaternion = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3( 1, 0, 0 ), 0)
            }
        },
        onWindowResize: function() {
            container = document.getElementById('container');
            this.camera.aspect = container.clientWidth/container.clientHeight;

            // Update camera frustum
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(container.clientWidth, container.clientHeight);
        },
        onMouseClick: function(e) {
            this.pointer.x = ( e.clientX / window.innerWidth ) * 2 - 1;
	        this.pointer.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
            
            
            this.raycaster.setFromCamera( this.pointer, this.camera );

            // calculate objects intersecting the picking ray
            const intersects = this.raycaster.intersectObjects( this.scene.children );
        }
    },
    created () {
        const tempRef = ref(db, 'temp');
        const humidRef = ref(db, 'humid');
        const isWateringRef = ref(db, 'isWatering');
        const isFanSpinningRef = ref(db, 'isFanSpinning');
        const isRoofOpen = ref(db, 'isRoofOpen');
        onValue(tempRef, (snapshot) => {
            const data = snapshot.val();
            this.changeText(data + '°C', this.tempText)
        });
        onValue(humidRef, (snapshot) => {
            const data = snapshot.val();
            this.changeText(data + '%', this.humidText)
        });
        onValue(isWateringRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                this.rainDrops.forEach((drop) => {
                    this.scene.add(drop)
                })
            }
            else if (!data) {
                this.rainDrops.forEach((drop) => {
                    this.scene.remove(drop)
                })
            }
        });
        onValue(isFanSpinningRef, (snapshot) => {
            const data = snapshot.val();
            this.isFanSpinning = data;
        });
        onValue(isRoofOpen, (snapshot) => {
            const data = snapshot.val();
            this.rotateRoof(data)
        });
    },
    mounted() {
        this.start()
        window.addEventListener('resize', this.onWindowResize);
        window.addEventListener('click', this.onMouseClick);
        this.animate()

    }
}

</script>


<style >
    
</style>
