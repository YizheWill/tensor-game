import typeWriter from './handleText.js';
// import handpose from './handleHandPose.js';
import DrawFingers from './DrawFingers';
import initCamera from './Camera.js';
document.addEventListener('DOMContentLoaded', () => {
  typeWriter();
  const canvas = document.querySelector('#video-canvas');
  const ctx = canvas.getContext('2d');
  const resultText = document.querySelector('#result-text');
  canvas.width = 640;
  canvas.height = 480;
  console.log('Canvas initialized');
  initCamera(640, 480, 30).then((video) => {
    video.play();
    video.addEventListener('loadeddata', () => {
      console.log('Camera is ready');
      let drawFingers = new DrawFingers(640, 480, 30, ctx, video, resultText);
      setTimeout(() => {
        setInterval(() => {
          drawFingers.draw();
        }, 2000);
      }, 1000);
    });
  });
});
