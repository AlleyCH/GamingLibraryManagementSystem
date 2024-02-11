import React, { useEffect } from 'react';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'; // You may need to adjust the path
import './home.css'

function Home(props) {
    useEffect(() => {
        let camera, scene, renderer, controls, stats;
        let mesh;
        const amount = parseInt(window.location.search.slice(1)) || 10;
        const count = Math.pow(amount, 3);

        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2(1, 1);

        const color = new THREE.Color();
        const white = new THREE.Color().setHex(0xffffff);

        function init() {
            camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.set(amount, amount, amount);
            camera.lookAt(0, 0, 0);

            scene = new THREE.Scene();

            const light = new THREE.HemisphereLight(0xffffff, 0x888888, 3);
            light.position.set(0, 1, 0);
            scene.add(light);

            const geometry = new THREE.IcosahedronGeometry(0.5, 3);
            const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

            mesh = new THREE.InstancedMesh(geometry, material, count);

            let i = 0;
            const offset = (amount - 1) / 2;

            const matrix = new THREE.Matrix4();

            for (let x = 0; x < amount; x++) {
                for (let y = 0; y < amount; y++) {
                    for (let z = 0; z < amount; z++) {
                        matrix.setPosition(offset - x, offset - y, offset - z);
                        mesh.setMatrixAt(i, matrix);
                        mesh.setColorAt(i, color);
                        i++;
                    }
                }
            }

            scene.add(mesh);

            const gui = new GUI();
            gui.add(mesh, 'count', 0, count);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio *3);
            //renderer.setSize(window.innerWidth, window.innerHeight);
            document.querySelector('.threejs').appendChild(renderer.domElement);
            //document.body.appendChild(renderer.domElement);


            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.enableZoom = false;
            controls.enablePan = false;

            stats = new Stats();
            document.body.appendChild(stats.dom);

            window.addEventListener('resize', onWindowResize);
            document.addEventListener('mousemove', onMouseMove);
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }

        function onMouseMove(event) {
            event.preventDefault();
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }

        function animate() {
            requestAnimationFrame(animate);
            controls.update();
            raycaster.setFromCamera(mouse, camera);
            const intersection = raycaster.intersectObject(mesh);
            if (intersection.length > 0) {
                const instanceId = intersection[0].instanceId;
                mesh.getColorAt(instanceId, color);
                if (color.equals(white)) {
                    mesh.setColorAt(instanceId, color.setHex(Math.random() * 0xffffff));
                    mesh.instanceColor.needsUpdate = true;
                }
            }
            render();
            stats.update();
        }

        function render() {
            renderer.render(scene, camera);
        }

        init();
        animate();

        return () => {
            
            // Clean up Three.js scene when component unmounts
            scene.remove(mesh);
            renderer.dispose();
            controls.dispose();
            stats.dom.remove();
            window.removeEventListener('resize', onWindowResize);
            document.removeEventListener('mousemove', onMouseMove);
        };
    
    }, []);

    return (
        <div>
            <h2>WELCOME TO ARCADE ALCOVE</h2>
            <div className='threejs'>
            {/* three.js should go here  */}
                <p></p>
      
            </div>
            <p id = 'available-para'>Available Games</p>
            <div className='available-games'>
                <iframe frameborder="0" src="https://itch.io/embed/1781275?dark=true" width="552" height="167"><a href="https://alleyc.itch.io/alphaprojectz">ProjectZ by DinoBois</a></iframe>
                <iframe frameborder="0" src="https://itch.io/embed/1774937?dark=true" width="552" height="167"><a href="https://alleyc.itch.io/midterm">Tutorial by AlleyC</a></iframe>                
               
            </div>
        </div>
    );

}
// withRouter will pass updated match, location, and history props 
// to the wrapped component whenever it renders.
export default Home;