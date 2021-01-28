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
  FGesture,
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
      FGesture,
    ];
    this.GE = new fp.GestureEstimator(this.knownGestures);
    this.charArray = 'abdefgwyv'.split('');
    this.imageArray = this.charArray.map(
      (char) => `./src/assets/images/${char}.png`
    );
    this.currentIndex = 0;
  }

  async genPredicts(video) {
    const model = await handpose.load();
    const predictions = model.estimateHands(video, true);
    // console.log('HandPose Model loaded');
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
    const nextButton = document.querySelector('#nextGesture');
    nextButton.addEventListener('click', () => {
      this.currentIndex = parseInt(Math.random() * 9);
      gestureName.innerText = this.charArray[this.currentIndex].toUpperCase();
      image.src = this.imageArray[this.currentIndex];
      passed.innerText = ' ';
    });

    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const predicts = await this.genPredicts(this.video);
    this.ctx.clearRect(0, 0, this.config.video.width, this.config.video.height);
    // console.log('predicts', predicts, 'length', predicts.length);
    if (predicts.length > 0) {
      drawHand(predicts, this.ctx);
      const est = this.GE.estimate(predicts[0].landmarks, 8.5);
      if (est.gestures.length) {
        let result = est.gestures.reduce((acc, ele) =>
          acc.confidence > ele.confidence ? acc : ele
        );
        this.resultText.innerText = result.name;
        if (result.name === gestureName.innerText) {
          passed.innerText = 'passed';
          let newIndex = parseInt(Math.random() * 9);

          while (this.currentIndex === newIndex) {
            console.log('this.currentIndex', this.currentIndex, newIndex);
            newIndex = parseInt(Math.random() * 9);
          }
          this.currentIndex = newIndex;
          console.log('this.currentIndex', this.currentIndex);
          gestureName.innerText = this.charArray[
            this.currentIndex
          ].toUpperCase();

          image.src = this.imageArray[this.currentIndex];
          await sleep(2000);
          passed.innerText = ' ';
        }
      } else {
        this.resultText.innerText = 'Invalid';
      }
    }
  }
  async draw() {
    this.estimateHands();
  }
}
export default DrawFingers;
