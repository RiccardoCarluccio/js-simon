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
  
  MAIN_TITLE.innerHTML = `${formatDigit(HOURS, 2)}:${formatDigit(MINUTES, 2)}:${formatDigit(SECONDS, 2)}:${formatDigit(MILLISECONDS, 3)}`;

  const TIME_DIFFERENCE = TARGET_DATE - NOW_MILLI;

  const COUNT_HOURS = Math.floor((TIME_DIFFERENCE % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const COUNT_MINUTES = Math.floor((TIME_DIFFERENCE % (1000 * 60 * 60)) / (1000 * 60));
  const COUNT_SECONDS = Math.floor((TIME_DIFFERENCE % (1000 * 60)) / 1000);

  COUNTDOWN_TIMER.innerHTML = `${formatDigit(COUNT_HOURS, 2)}:${formatDigit(COUNT_MINUTES, 2)}:${formatDigit(COUNT_SECONDS, 2)}`;
}

setInterval(displayCurrentTime, 100);

function formatDigit(num, minDigits) {
  const formattedNumber = num.toLocaleString('it-IT', {
    minimumIntegerDigits: minDigits,
  })

  return formattedNumber;
}