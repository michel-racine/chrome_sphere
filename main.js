// import * as THREE from 'three';
let factor = 1;
// Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load Skybox
const loader = new THREE.CubeTextureLoader();
const skybox = loader.load([

  'skate.png',
  'skate.png',
  'skate.png',
  'skate.png',
  'skate.png',
  'skate.png',
]);
scene.background = skybox;

const geometry = new THREE.IcosahedronGeometry(2.5, 0);

const material = new THREE.MeshStandardMaterial({
  metalness: 1,
  roughness: 0,
  envMap: skybox,
  flatShading: true, // Ensures sharp edges on facets
});

// calling diamond a sphere here
const sphere = new THREE.Mesh(geometry, material);
sphere.rotation.y = Math.PI / 4; // Slight rotation for better look
scene.add(sphere);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Strong directional light
directionalLight.castShadow = true;
scene.add(directionalLight);

// Camera Position
camera.position.z = 3;
// directionalLight.position.copy(camera.position);
directionalLight.position.set(0, 4, -4); // Light coming from top-right-front
// Animation Loop
let r = 0.25;

function animate() {
  requestAnimationFrame(animate);
  // sphere.rotation.y += 0.01; // Slow rotation

  // sphere.position.x = Math.cos(t) * r;
  // sphere.position.z = Math.sin(t) * r + 2.5;

  t += 0.01;
  sphere.position.z = -4;
  sphere.position.y = -1;
  sphere.rotation.y += 0.0026 * factor;
  // sphere.rotation.z += 0.0015 * factor;
  // sphere.rotation.y = Math.cos(t);
  sphere.rotation.z = Math.sin(t * 0.67);
  renderer.render(scene, camera);
}
animate();
