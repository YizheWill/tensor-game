import typeWriter from './handleText.js';
// import handpose from './handleHandPose.js';
import DrawFingers from './DrawFingers';
import initCamera from './Camera.js';
import Timer from './Timer';
document.addEventListener('DOMContentLoaded', () => {
  typeWriter();

  var fingerDrawing;
  var timer;

  const canvas = document.querySelector('#video-canvas');
  const ctx = canvas.getContext('2d');
  const resultText = document.getElementById('result-text');
  const cameraButton = document.getElementById('cameraToggle');
  const container = document.getElementById('container');
  const results = document.getElementById('results');
  const gameStartModal = document.querySelector('#game-modal');
  const nextButton = document.querySelector('#nextGesture');
  // let firstClick = true;
  const startButton = document.querySelector('#start-button');
  const cancelButton = document.querySelector('#cancel-button');
  const cancelGame = document.querySelector('#cancel-game');
  const restartButton = document.querySelector('#restart-button');
  const scoreBoard = document.querySelector('.final-score');
  var drawAction;

  cancelGame.addEventListener('click', () => {
    container.style.display = 'none';
    results.style.display = 'none';
    nextButton.style.display = 'flex';
    cameraButton.style.display = 'flex';
    cancelGame.style.display = 'none';
    clearInterval(drawAction);
    restartButton.style.display = 'none';
    scoreBoard.style.display = 'none';
    timer.hide();
  });

  // console.log('container', container);
  startButton.addEventListener('click', () => {
    document.querySelector('#game-modal').style.display = 'none';
    container.style.display = 'block';
    results.style.display = 'flex';
    nextButton.style.display = 'none';
    cancelGame.style.display = 'flex';
    document.querySelector('#whole-timer').style.display = 'flex';
    scoreBoard.style.display = 'none';
    timer.start();
  });
  cancelButton.addEventListener('click', () => {
    document.querySelector('#game-modal').style.display = 'none';
    cameraButton.style.display = 'block';
  });
  canvas.width = 640;
  canvas.height = 480;
  initCamera(640, 480, 30).then((video) => {
    video.play();
    video.addEventListener('loadeddata', () => {
      cameraButton.addEventListener('click', () => {
        // if (firstClick) {
        //   setTimeout(() => {
        //     cameraButton.click();
        //     cameraButton.click();
        //     firstClick = false;
        //   }, 10);
        // } else
        gameStartModal.style.display = 'flex';
        cameraButton.style.display = 'none';
        // if (container.style.display == 'none') {
        //   container.style.display = 'block';
        //   results.style.display = 'flex';
        // } else {
        //   container.style.display = 'none'; //undefined
        //   results.style.display = 'none';
        // }
      });
      console.log('Camera is ready');
    });
    setTimeout(() => {
      fingerDrawing = () => {
        let drawFingers = new DrawFingers(640, 480, 30, ctx, video, resultText);
        drawAction = setInterval(() => {
          console.log('drawing hand');
          drawFingers.draw();
          console.log('here the interval is: ', drawAction);
        }, 500);
        console.log('here', drawAction);
        return drawAction;
      };
      var stopDrawing = () => {
        console.log('here stoping a interval', drawAction);
        let ret = drawAction;
        clearInterval(drawAction);
        return ret;
      };
      fingerDrawing();
      setTimeout(() => {
        stopDrawing();
      }, 2000);
      timer = new Timer(
        document.querySelector('#timer'),
        stopDrawing,
        fingerDrawing
      );
      restartButton.addEventListener('click', () => {
        restartButton.style.display = 'none';
        scoreBoard.style.display = 'none';
        timer.start();
      });
    }, 0);
  });
});
