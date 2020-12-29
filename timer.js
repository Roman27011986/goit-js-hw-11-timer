// const daysRef = document.querySelector('.value[data-value="days"]');
// const hoursRef = document.querySelector('.value[data-value="hours"]');
// const minsRef = document.querySelector('.value[data-value="mins"]');
// const secsRef = document.querySelector('.value[data-value="secs"]');
// const nextDate = new Date('jan 27, 2021');

// setInterval(() => {
//   const currentDate = Date.now();
//   const dataTime = nextDate - currentDate;
//   updateTime(dataTime);
// }, 1000);

// function updateTime(time) {
//   const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   );

//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   daysRef.textContent = days;
//   hoursRef.textContent = hours;
//   minsRef.textContent = mins;
//   secsRef.textContent = secs;
// }

// function pad(value) {
//   return String(value).padStart(2, '0');
// }

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
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
  selector: document.querySelector('#timer-1'),
  targetDate: new Date('jan 27, 2021'),
});

timer.start();
