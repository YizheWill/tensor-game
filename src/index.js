import typeWriter from './handleText.js';
// import handpose from './handleHandPose.js';
import DrawFingers from './DrawFingers';
import initCamera from './Camera.js';
document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
  const canvas = document.querySelector('#video-canvas');
  const ctx = canvas.getContext('2d');
  const resultText = document.querySelector('#result-text');
  const cameraButton = document.querySelector('#cameraToggle');
  const container = document.querySelector('#container');
  const results = document.querySelector('#results');
  canvas.width = 640;
  canvas.height = 480;
  console.log('Canvas initialized');
  initCamera(640, 480, 30).then((video) => {
    video.play();
    video.addEventListener('loadeddata', () => {
      cameraButton.addEventListener('click', () => {
        if (container.style.display === 'none') {
          container.style.display = 'block';
          results.style.display = 'flex';
        } else {
          container.style.display = 'none';
          results.style.display = 'none';
        }
      });
      console.log('Camera is ready');
      let drawFingers = new DrawFingers(640, 480, 30, ctx, video, resultText);
      setTimeout(() => {
        setInterval(() => {
          drawFingers.draw();
        }, 1000);
      }, 5500);
    });
  });
});
