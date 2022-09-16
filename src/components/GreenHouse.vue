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
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);



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
            text: null,
            controls: null,
            groundMirror: null,
        }
    },
    methods: {
        start : function() {
            
            container = document.getElementById('container');
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera( 75, container.clientWidth/container.clientHeight, 0.1, 1000 );
            this.renderer = new THREE.WebGLRenderer({ antialias: true });
            this.renderer.setSize(container.clientWidth, container.clientHeight);
            // this.renderer.setClearColor();
            const mainLight = new THREE.DirectionalLight(0xffffff, 5);
            // this.updateCubeMap(this.renderer, this.scene);

            mainLight.position.set(10, 10, 10);

            const hemisphereLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 5);
            this.scene.add(mainLight, hemisphereLight);

            container.appendChild( this.renderer.domElement );
            
            const loader = new GLTFLoader();
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
                this.loadGrass()
                const geometry = new THREE.PlaneGeometry( 100.1, 100.1 );
				let groundMirror = new Reflector( geometry, {
					clipBias: 0.003,
					textureWidth: window.innerWidth * window.devicePixelRatio,
					textureHeight: window.innerHeight * window.devicePixelRatio,
                    mixBlur: 0.5
					// color: '#a4b3ab',
                    // transparent: true, 
				} );
                const planeGeo = new THREE.PlaneGeometry( 100.1, 100.1 );
                const texture = new THREE.TextureLoader().load( '/abstract-luxury-plain-blur-grey-black-gradient-used-as-background-studio-wall-display-your-products_1258-63641.jpg' );
                const planeMat = new THREE.MeshBasicMaterial( { map: texture, opacity: 0.5, transparent: true} );
                const plane = new THREE.Mesh( planeGeo, planeMat );

                
                groundMirror.position.y = -box.y/2-0.25
                plane.position.y = -box.y/2 +.01-0.25
                // plane.position.y = groundMirror.position.y + 1
                // groundMirror.attach(plane)
                plane.rotateX( - Math.PI / 2);
                groundMirror.rotateX( - Math.PI / 2);
                this.scene.add(plane)
                this.scene.add( groundMirror );
            })

           

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
                const tempGeo = new TextGeometry('°C', {
                    font: font,
                    size: 0.5,
                    height: 0.125
                })

                const tempText = new THREE.Mesh(tempGeo, [
                    new THREE.MeshPhongMaterial({color: '#09b342'}),
                    new THREE.MeshPhongMaterial({color: '#0c993b'})
                ])

                tempText.geometry.computeBoundingBox()
                tempText.geometry.translate(-tempText.geometry.boundingBox.max.x/2,0,-tempText.geometry.boundingBox.max.z)

                const humidGeo = new TextGeometry('23%', {
                    font: font,
                    size: 0.5,
                    height: 0.125
                })
                
                const humidText = new THREE.Mesh(humidGeo, [
                    new THREE.MeshPhongMaterial({color: 0xad4000}),
                    new THREE.MeshPhongMaterial({color: 0x5c2301})
                ])

                humidText.geometry.computeBoundingBox()
                humidText.geometry.translate(-humidText.geometry.boundingBox.max.x/2, 0,-humidText.geometry.boundingBox.max.z)

                const fanGeo = new TextGeometry('21 rpm', {
                    font: font,
                    size: 0.5,
                    height: 0.125
                })

                const fanText = new THREE.Mesh(fanGeo, [
                    new THREE.MeshPhongMaterial({color: 0xad4000}),
                    new THREE.MeshPhongMaterial({color: 0x5c2301})
                ])
                
                fanText.geometry.computeBoundingBox()
                fanText.geometry.translate(-fanText.geometry.boundingBox.max.x/2, 0,-fanText.geometry.boundingBox.max.z)

                this.tempText = tempText
                this.humidText = humidText
                this.fanText = fanText

                this.tempText.position.y = -1.5
                this.humidText.position.y = -1.5
                this.fanText.position.y = -1.5

                this.tempText.position.x += 3
                this.humidText.position.x += 3
                this.fanText.position.x += 3

                this.tempText.position.z -= 1
                this.humidText.position.z += 1
                this.fanText.position.z = 0

                this.tempText.rotateX( - Math.PI / 2);
                this.humidText.rotateX( - Math.PI / 2);
                this.fanText.rotateX( - Math.PI / 2);
                
                this.scene.add(this.tempText)
                this.scene.add(this.humidText)
                this.scene.add(this.fanText)


                
            })

            

        },
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

            // var geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.2 );
            // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            // var cube = new THREE.Mesh( geometry, material );
            // this.scene.add(cube);
            // this.model.attach(cube)

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
        animate: function () {
            requestAnimationFrame( this.animate );
            if (this.leavesMaterial) {
                this.leavesMaterial.uniforms.time.value = this.clock.getElapsedTime();
                this.leavesMaterial.uniformsNeedUpdate = true;
            }
            
            // this.cube.rotation.x += 0.01;
            // if (this.model) this.model.rotation.y += 0.001;
            this.renderer.render( this.scene, this.camera );
        },
        changeText: function(value, model) {
            const geo = new TextGeometry(String(value), {
                font: this.font,
                size: 0.5,
                height: 0.125
            })
            geo.computeBoundingBox()
            
    
            geo.translate(-geo.boundingBox.max.x/2, 0,-geo.boundingBox.max.z)
            model.geometry = geo


            
        },
        onWindowResize: function() {
            container = document.getElementById('container');
            this.camera.aspect = container.clientWidth/container.clientHeight;

            // Update camera frustum
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(container.clientWidth, container.clientHeight);
        },
    },
    created () {
        const db = getDatabase();
        const tempRef = ref(db, 'temp');
        onValue(tempRef, (snapshot) => {
            const data = snapshot.val();
            this.changeText(data + '°C', this.tempText)
        });
    },
    mounted() {
        this.start()
        window.addEventListener('resize', this.onWindowResize);
        this.animate()
    }
}

</script>


<style >
    
</style>
