const MAIN_TITLE = document.getElementById('main-title');

function displayCurrentTime() {
  const NOW = new Date();

  const HOURS = NOW.getHours();
  const MINUTES = NOW.getMinutes();
  const SECONDS = NOW.getSeconds();
  const MILLISECONDS = NOW.getMilliseconds();
  
  if (SECONDS < 10 && MILLISECONDS > 10 && MILLISECONDS < 100) {
    MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:0${SECONDS}:0${MILLISECONDS}`);
  } else if (SECONDS < 10 && MILLISECONDS < 10) {
    MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:0${SECONDS}:00${MILLISECONDS}`);
  } else if (SECONDS < 10) {
    MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:0${SECONDS}:${MILLISECONDS}`);
  } else if (MILLISECONDS > 10 && MILLISECONDS < 100) {
    MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:${SECONDS}:0${MILLISECONDS}`);
  } else if (MILLISECONDS < 10) {
    MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:${SECONDS}:00${MILLISECONDS}`);
  } else {
    MAIN_TITLE.innerHTML = (`${HOURS}:${MINUTES}:${SECONDS}:${MILLISECONDS}`);
  }
}

setInterval(displayCurrentTime, 100);