

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate;
    this.start()
  }

  start() {
    setInterval(() => {
      const currentDate = Date.now();
      const dataTime = this.targetDate - currentDate;
      this.updateTime(dataTime);
    }, 1000);
  }

  updateTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.qwe(days, hours, mins, secs);
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  qwe(...args) {
    const arrDiv = [...this.selector.children].map(
      (el, i) => (el.children[0].textContent = args[i]),
    );
  }
}
const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('jan 27, 2021'),
});


