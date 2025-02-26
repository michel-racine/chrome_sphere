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
  // 'Images/px.png',
  //   'Images/nx.png',
  //   'Images/py.png',
  //   'Images/ny.png',
  //   'Images/pz.png',
  //   'Images/nz.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',

  // 'Images/sunset.png',
  // 'Images/sunset.png',
  // 'Images/sky.png',
  // 'Images/ground.png',
  // 'Images/sunset.png',
  // 'Images/sunset.png',

  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  // 'Images/n1.png',
  'Images/skate.png',
  'Images/skate.png',
  'Images/skate.png',
  'Images/skate.png',
  'Images/skate.png',
  'Images/skate.png',
  // 'Images/hasbeans.jpg',
]);
scene.background = skybox;

// // Chrome Sphere
// const geometry = new THREE.SphereGeometry(1, 64, 64);
// const material = new THREE.MeshStandardMaterial({
//   metalness: 1,
//   roughness: 0,
//   envMap: skybox,
// });

// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);
// const sphere2 = new THREE.Mesh(geometry, material);
// scene.add(sphere2);

// // Faceted Diamond Shape
// const geometry = new THREE.DodecahedronGeometry(2); // 12-sided faceted shape
// Create an icosahedron geometry (radius 1, detail 0)
const geometry = new THREE.IcosahedronGeometry(2.5, 0);

// const material = new THREE.MeshStandardMaterial({
//   metalness: 0.99,
//   roughness: 0.05,
//   envMap: skybox,
//   flatShading: true, // Ensures sharp edges on facets
// });
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

// Lighting (for realistic shading)
// const light = new THREE.AmbientLight(0xff0000, 1);
// scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Strong directional light
directionalLight.castShadow = true;
scene.add(directionalLight);

// Camera Position
camera.position.z = 3;
// directionalLight.position.copy(camera.position);
directionalLight.position.set(0, 4, -4); // Light coming from top-right-front
// Animation Loop
let r = 0.25;
let a = 1;
let b = 1;
let c = 1;
let d = 1;
let e = 1;
let f = 1;
let t = 0;

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
  // sphere.scale.x = a;
  // sphere.scale.y = b;
  // sphere.scale.z = c;

  // a = 1 + 0.1 * Math.cos(1.3 * t);
  // b = 1 + 0.1 * Math.sin(t);
  // c = 1 + 0.1 * Math.cos(1.9 * t);

  // /////////////////////////
  // sphere2.position.x = Math.cos(t) * r;
  // sphere2.position.z = Math.sin(t) * r;
  // t += 0.0067;

  // sphere2.scale.x = d;
  // sphere2.scale.y = e;
  // sphere2.scale.z = f;

  // d = 1 + 0.1 * Math.cos(1.2 * t);
  // e = 1 + 0.1 * Math.sin(0.9 * t);
  // f = 1 + 0.1 * Math.cos(1.7 * t);

  renderer.render(scene, camera);
}
animate();
