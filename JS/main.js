const MAIN_TITLE = document.getElementById('main-title');
const COUNTDOWN_TIMER = document.getElementById('countdown-timer');

const TARGET_DATE = new Date('Jul 14, 2023 9:30').getTime();

function displayCurrentTime() {
  const NOW = new Date();
  const NOW_MILLI = new Date().getTime();

  const HOURS = NOW.getHours();
  const MINUTES = NOW.getMinutes();
  const SECONDS = NOW.getSeconds();
  const MILLISECONDS = NOW.getMilliseconds();
  
  MAIN_TITLE.innerHTML = `${formatDigit(HOURS)}:${formatDigit(MINUTES)}:${formatDigit(SECONDS)}:${formatDigit(MILLISECONDS)}`;

  // if (SECONDS < 10 && MILLISECONDS > 10 && MILLISECONDS < 100) {
  //   MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:0${SECONDS}:0${MILLISECONDS}`);
  // } else if (SECONDS < 10 && MILLISECONDS < 10) {
  //   MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:0${SECONDS}:00${MILLISECONDS}`);
  // } else if (SECONDS < 10) {
  //   MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:0${SECONDS}:${MILLISECONDS}`);
  // } else if (MILLISECONDS > 10 && MILLISECONDS < 100) {
  //   MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:${SECONDS}:0${MILLISECONDS}`);
  // } else if (MILLISECONDS < 10) {
  //   MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:${SECONDS}:00${MILLISECONDS}`);
  // } else {
  //   MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:${SECONDS}:${MILLISECONDS}`);
  // }

  const TIME_DIFFERENCE = TARGET_DATE - NOW_MILLI;

  const COUNT_HOURS = Math.floor((TIME_DIFFERENCE % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const COUNT_MINUTES = Math.floor((TIME_DIFFERENCE % (1000 * 60 * 60)) / (1000 * 60));
  const COUNT_SECONDS = Math.floor((TIME_DIFFERENCE % (1000 * 60)) / 1000);

  COUNTDOWN_TIMER.innerHTML = `${formatDigit(COUNT_HOURS)}:${formatDigit(COUNT_MINUTES)}:${formatDigit(COUNT_SECONDS)}`;
}

setInterval(displayCurrentTime, 100);

function formatDigit(num) {
  if (num < 10) {
    num = `0${num}`;
  }
  return num;
}