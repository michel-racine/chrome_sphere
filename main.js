// Scene, Lights, Camera, Renderer, Animation
const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 3;

const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Strong directional light
directionalLight.castShadow = true;
scene.add(directionalLight);
directionalLight.position.copy(camera.position);


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load Skybox
const loader = new THREE.CubeTextureLoader();
const skybox = loader.load([
  'orion2.jpg',
  'orion2.jpg',
  'orion.jpg',
  'orion.jpg',
  'orion.jpg',
  'orion.jpg',
]);
scene.background = skybox;

// Our cool mystical shape material and geometry
const geometry = new THREE.IcosahedronGeometry(2.5, 0);
const material = new THREE.MeshStandardMaterial({
  metalness: 1,
  roughness: 0,
  envMap: skybox,
  flatShading: true, // Ensures sharp edges on facets
});

const diamond = new THREE.Mesh(geometry, material);
diamond.rotation.y = Math.PI / 4; // Slight rotation for better look
scene.add(diamond);


let r = 0.25; // Radius
let t = 0; // Theta or time delta

diamond.position.z = -4;
diamond.position.y = 0;
diamond.position.z = -2;

function animate() {
  t += 0.01;
  diamond.rotation.y += 0.0026;
  diamond.rotation.z = Math.sin(t * 0.67);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();
