const daysRef = document.querySelector('.value[data-value="days"]');
const hoursRef = document.querySelector('.value[data-value="hours"]');
const minsRef = document.querySelector('.value[data-value="mins"]');
const secsRef = document.querySelector('.value[data-value="secs"]');
const nextDate = new Date('jan 27, 2021');

setInterval(() => {
  const currentDate = Date.now();
  const dataTime = nextDate - currentDate;
  updateTime(dataTime);
}, 1000);

function updateTime(time) {
  const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  );

  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minsRef.textContent = mins;
  secsRef.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
