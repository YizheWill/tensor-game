class Timer {
  constructor(timerText, result) {
    this.timerText = timerText;
    this.showResult = result;
    this.seconds = 30;
  }
  transformText(sec) {
    if (sec >= 10) return sec.toString();
    else return '0' + sec.toString();
  }
  start() {
    timer = setInterval(() => {
      this.seconds -= 1;
      this.timerText.innerHTML = this.transformText(this.seconds);
      if (this.seconds == 0) {
        this.timerText.innerHTML = '00';
        window.clearTimeout(timer);
        result.style.display = 'flex';
      }
    }, 1000);
  }
}
