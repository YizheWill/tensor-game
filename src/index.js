import typeWriter from './handleText.js';
// import handpose from './handleHandPose.js';
import DrawFingers from './DrawFingers';
import initCamera from './Camera.js';
document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
  const canvas = document.querySelector('#video-canvas');
  const ctx = canvas.getContext('2d');
  const resultText = document.getElementById('result-text');
  const cameraButton = document.getElementById('cameraToggle');
  const container = document.getElementById('container');
  const results = document.getElementById('results');
  let firstClick = true;

  // console.log('container', container);
  canvas.width = 640;
  canvas.height = 480;
  initCamera(640, 480, 30).then((video) => {
    video.play();
    video.addEventListener('loadeddata', () => {
      cameraButton.addEventListener('click', () => {
        if (firstClick) {
          setTimeout(() => {
            cameraButton.click();
            cameraButton.click();
            firstClick = false;
          }, 10);
        } else if (container.style.display == 'none') {
          container.style.display = 'block';
          results.style.display = 'flex';
        } else {
          container.style.display = 'none'; //undefined
          results.style.display = 'none';
        }
      });
      console.log('Camera is ready');
      let drawFingers = new DrawFingers(640, 480, 30, ctx, video, resultText);
      setTimeout(() => {
        setInterval(() => {
          drawFingers.draw();
        }, 1000);
      }, 6000);
    });
  });
});
