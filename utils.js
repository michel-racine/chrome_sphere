// Handle window resizing to avoid potential lags
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

const keyboard = {};
window.addEventListener('keydown', function (e) {
  keyboard[e.key] = true;
});

// // Example keyboard control

//   // View theta control
//   if (keyboard['j']) viewTheta -= 0.02;
//   else if (keyboard['l']) viewTheta += 0.02;
