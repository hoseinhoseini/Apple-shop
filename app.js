// Credit: Mateusz Rybczonec
const TIME_LIMIT = 3700;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

document.getElementById("clock").innerHTML = `
<div class="base-timer">
  <span id="base-timer-label">
    ${formatTime(timeLeft)}
  </span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  let hour = Math.floor(minutes / 60)
  minutes = hour % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  if (minutes < 10) {
      minutes = `0${minutes}`
  }
  return `${hour}:${minutes}:${seconds}`;
}

