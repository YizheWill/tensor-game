import { drawHand } from './drawHand';
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
    this.knownGestures = [fp.Gestures.VictoryGesture, fp.Gestures.ThumbsUpGesture];
    this.GE = new fp.GestureEstimator(this.knownGestures);
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
    const predicts = await this.genPredicts(this.video);
    this.ctx.clearRect(0, 0, this.config.video.width, this.config.video.height);
    console.log('predicts', predicts, 'length', predicts.length);
    if (predicts.length > 0) {
      drawHand(predicts, this.ctx);
      const est = this.GE.estimate(predicts[0].landmarks, 7);
      if (est.gestures?.length) {
        let result = est.gestures.reduce((acc, ele) =>
          acc.confidence > ele.confidence ? acc : ele
        );
        console.log('result', result);
        if (this.resultText.innerText !== result.name) {
          this.resultText.innerText = result.name;
        }
      }
    }
  }
  async draw() {
    this.estimateHands();
  }
}
export default DrawFingers;
