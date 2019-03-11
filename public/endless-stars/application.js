/*
 * Endless Stars - Main Application File
 *
 * Required files (in this order):
 *  three/r95/three.min.js
 *  three/stats.min.js
 *  generate-sprites.js
 *  application.js (this file)
 *
 */

// three.js
let camera, scene, renderer;

/*
// fps monitor
let stats;
*/

// camera settings
const fov = 75;
const clipNear = 1; // 1
const clipFar = 2000; // 2000

init(); // ***initialize; stage everything for first draw***
animate(); // ***call animate function and render the scene***

// Initialize

function init() {
  camera = new THREE.PerspectiveCamera( // initialize a camera to view the scene
    fov, // field of view (in degrees)
    window.innerWidth / window.innerHeight, // aspect ratio
    clipNear, // near clipping plane
    clipFar // far clipping plane
  );
  camera.position.z = 1000; // 1000

  scene = new THREE.Scene();

  // add items to scene here...

  generateSprites(); // call function from file: generate-sprites.js

  // initialize renderer

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  /*
  // setup fps counter

  stats = new Stats();
  document.body.appendChild(stats.dom);
  */

  // initialize responsive resizing
  window.addEventListener("resize", onWindowResize, false);
}

// Responsive

// update on window resize event
function onWindowResize() {
  // event listener located in init() function
  camera.aspect = window.innerWidth / window.innerHeight; // get the new viewport size for the camera
  camera.updateProjectionMatrix(); // update camera with new dimensions

  renderer.setSize(window.innerWidth, window.innerHeight); // update renderer with new viewport dimensions
}

// Animation

// animate the scene
function animate() {
  // generate-sprites.js function
  spritesInMotion();

  /*
  // update stats.js fps monitor
  stats.update();
  */

  requestAnimationFrame(animate); // request a new frame at default 60fps
  renderer.render(scene, camera);
}
