class Timer {
  constructor(timerText, clearDrawHand, startDraw) {
    this.timerText = timerText;
    this.seconds = 30;
    this.clearDrawHand = clearDrawHand;
    this.startDraw = startDraw;
  }
  transformText(sec) {
    if (sec >= 10) return sec.toString();
    else return '0' + sec.toString();
  }
  show() {
    timerText.style.display = 'inline';
  }
  hide() {
    document.querySelector('#whole-timer').style.display = 'none';
    clearInterval(this.timer);
  }
  start() {
    console.log('this.timer', this.timer);
    console.log('this.startDraw', this.startDraw);
    console.log('clearing', this.clearDrawHand());

    this.interval = this.startDraw();
    console.log('start drawing and the interval is: ', this.interval);
    console.log('started');
    this.seconds = 30;
    document.querySelector('#whole-timer').style.display = 'flex';
    document.querySelector('#whole-timer').innerHTML =
      '00:' + this.transformText(this.seconds);
    console.log(document.querySelector('#whole-timer'));
    this.timer = setInterval(() => {
      console.log('here');
      this.seconds -= 1;
      document.querySelector('#whole-timer').innerHTML =
        '00:' + this.transformText(this.seconds);
      if (this.seconds < 0) {
        console.log('this.interval trying to stop', this.interval);
        window.clearInterval(this.interval);
        // result.style.display = 'flex';
        document.querySelector('#restart-button').style.display = 'block';

        clearInterval(this.timer);
        console.log('this.timer', this.timer);
        // this.seconds = 30;
        this.hide();
        document.querySelector(
          '#final-score'
        ).innerHTML = document.querySelector('#score-number').innerHTML;
        document.querySelector('.final-score').style.display = 'flex';
      }
    }, 1000);
  }
}

export default Timer;
