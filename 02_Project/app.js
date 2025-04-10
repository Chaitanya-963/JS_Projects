
let interval;
let valueInSec = 0; 
let isPaused = false;

const timeInput = document.getElementById("timeInput");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resumeBtn = document.getElementById("resumeBtn");
const timerDisplay = document.getElementById("timerDisplay");

function updateDisplay() {
  timerDisplay.innerHTML = `Time remaining: ${valueInSec} seconds`;
}

function startTimer() {
  if (interval) return;

  valueInSec = parseInt(timeInput.value);
  if (isNaN(valueInSec) || valueInSec <= 0) {
    timerDisplay.innerHTML = "Please enter a valid number greater than zero";
    return;
  }

  interval = setInterval(() => {
    if (!isPaused) {
      valueInSec--;
      updateDisplay();

      if (valueInSec <= 0) {
        clearInterval(interval);
        interval = null;
        timerDisplay.innerHTML = "Time up 🕛";
      }
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
}

function resumeTimer() {
  if (valueInSec > 0 && isPaused) {
    isPaused = false;
  }
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);