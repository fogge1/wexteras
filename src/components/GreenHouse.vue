<template>
    <div id="container">
        <input type="text" v-model="text">
        <button @click="changeText(text, humidText)">hej</button>
    </div>
</template>

<script>

import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {FontLoader} from 'three/examples/jsm/loaders/FontLoader.js'
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

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
            text: null
        }
    },
    methods: {
        start : function() {
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setClearColor('skyblue');
            const mainLight = new THREE.DirectionalLight(0xffffff, 5);
            mainLight.position.set(10, 10, 10);

            const hemisphereLight = new THREE.HemisphereLight(0xddeeff, 0x202020, 5);
            this.scene.add(mainLight, hemisphereLight);

            document.getElementById("container").appendChild( this.renderer.domElement );
            
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

            }, undefined, function ( error ) {

                console.error(error);

            });

           

            this.camera.position.z = 5;
            this.controls = new OrbitControls(this.camera, document.getElementById("container"));
            this.controls.minDistance = 5;
            this.controls.maxDistance = 10;
            // this.controls.enablePan = false;
            this.controls.update();

            const fontLoader = new FontLoader()

            fontLoader.load('/fonts/Oswald_Regular.json', (font)  => {
                this.font = font;
                const tempGeo = new TextGeometry('21°C', {
                    font: font,
                    size: 0.5,
                    height: 0.125
                })

                const tempText = new THREE.Mesh(tempGeo, [
                    new THREE.MeshPhongMaterial({color: 0xad4000}),
                    new THREE.MeshPhongMaterial({color: 0x5c2301})
                ])

                tempText.geometry.computeBoundingBox()
                tempText.geometry.translate(-tempText.geometry.boundingBox.max.x/2,0,-tempText.geometry.boundingBox.max.z)

                const humidGeo = new TextGeometry('21%', {
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

                this.tempText.position.y = 1.25
                this.humidText.position.y = 2
                this.fanText.position.y = 2.75
                
                this.scene.add(this.tempText)
                this.scene.add(this.humidText)
                this.scene.add(this.fanText)


                
            })


            
            // var geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.2 );
            // var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            // var cube = new THREE.Mesh( geometry, material );
            // this.scene.add(cube);
            // this.model.attach(cube)

            
        },
        animate: function () {
            requestAnimationFrame( this.animate );
            // this.cube.rotation.x += 0.01;
            if (this.model) this.model.rotation.y += 0.001;
            this.renderer.render( this.scene, this.camera );
        },
        changeText: function(value, model) {
            const geo = new TextGeometry(String(value), {
                font: this.font,
                size: 0.5,
                height: 0.125
            })
            geo.computeBoundingBox()
            const worldPosition = new THREE.Vector3();
            // model.getWorldPosition( worldPosition );
            console.log(model.getWorldPosition( worldPosition ));
            geo.translate(-geo.boundingBox.max.x/2, 0,-geo.boundingBox.max.z)
            model.geometry = geo


            
        },
        onWindowResize: function() {
            this.camera.aspect = window.innerWidth / window.innerHeight;

            // Update camera frustum
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
    },
    mounted() {
        this.start()
        window.addEventListener('resize', this.onWindowResize);
        this.animate()
    }
}

</script>


<style >
    #container {
        width: 100%;
        height: 100%;
        margin: auto;
    }
</style>
