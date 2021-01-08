import { drawHand } from './drawHand';
import {
  AGesture,
  BGesture,
  YGesture,
  EGesture,
  WGesture,
  VGesture,
  DGesture,
  GGesture,
  LoveGesture,
} from './A';
class DrawFingers {
  constructor(width, height, fps, ctx, video, resultText) {
    this.width = width;
    this.height = height;
    this.fps = fps;
    this.ctx = ctx;
    this.video = video;
    this.resultText = resultText;
    this.config = {
      video: { width: 640, height: 480, fps: 30 },
    };
    this.landmarkColors = {
      thumb: 'red',
      indexFinger: 'blue',
      middleFinger: 'yellow',
      ringFinger: 'green',
      pinky: 'pink',
      palmBase: 'white',
    };
    this.gestureStrings = {
      thumbs_up: 'ThumbUp',
      victory: 'Victory',
    };
    this.knownGestures = [
      // fp.Gestures.VictoryGesture,
      fp.Gestures.ThumbsUpGesture,
      AGesture,
      BGesture,
      YGesture,
      EGesture,
      WGesture,
      VGesture,
      DGesture,
      GGesture,
      LoveGesture,
    ];
    this.GE = new fp.GestureEstimator(this.knownGestures);
    this.charArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    this.imageArray = this.charArray.map((char) => `./src/assets/images/${char}.png`);
    this.currentIndex = 0;
  }

  async genPredicts(video) {
    const model = await handpose.load();
    const predictions = model.estimateHands(video, true);
    console.log('HandPose Model loaded');
    return predictions;
  }
  drawPoint(x, y, r, color) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, r, 0, 2 * Math.PI);
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  async estimateHands() {
    const gestureName = document.querySelector('#gesture-name');
    const image = document.querySelector('#gesture-image');
    const passed = document.querySelector('#passed');

    const predicts = await this.genPredicts(this.video);
    this.ctx.clearRect(0, 0, this.config.video.width, this.config.video.height);
    console.log('predicts', predicts, 'length', predicts.length);
    if (predicts.length > 0) {
      drawHand(predicts, this.ctx);
      const est = this.GE.estimate(predicts[0].landmarks, 8.5);
      if (est.gestures.length) {
        let result = est.gestures.reduce((acc, ele) =>
          acc.confidence > ele.confidence ? acc : ele
        );

        if (result.name === 'V') {
          this.resultText.innerText = 'V';
          passed.style.display = 'inline';
          setTimeout(() => {
            passed.style.display = 'none';
            this.currentIndex = parseInt(Math.random() * 26);

            image.src = this.imageArray[this.currentIndex];
            gestureName.innerText = this.charArray[this.currentIndex];
          }, 3000);
        } else if (result.name === 'thumbs_up') {
          this.resultText.innerText = 'THUMB';
        } else if (result.name === 'A') {
          this.resultText.innerText = 'A';
        } else if (result.name === 'Y') {
          this.resultText.innerText = 'Y';
        } else if (result.name === 'B') {
          this.resultText.innerText = 'B';
        } else if (result.name === 'E') {
          this.resultText.innerText = 'E';
        } else if (result.name === 'W') {
          this.resultText.innerText = 'W';
        } else if (result.name === 'G') {
          this.resultText.innerText = 'G';
        } else if (result.name === 'D') {
          this.resultText.innerText = 'D';
        } else if (result.name === 'ily') {
          this.resultText.innerText = 'Love You!';
        }
      } else {
        setTimeout(() => {
          this.resultText.innerText = 'INVALID';
        }, 1000);
      }
    }
  }
  async draw() {
    this.estimateHands();
  }
}
export default DrawFingers;
