window.addEventListener("DOMContentLoaded", () => {
  let isRunning = true;
  const button = document.querySelector(".controls .button");
  const hoursElement = document.querySelector("#hours");
  const minutesElement = document.querySelector("#minutes");
  const secondsElement = document.querySelector("#seconds");

  if (!button || !hoursElement || !minutesElement || !secondsElement) {
    console.error("Éléments du minuteur introuvables.");
    return;
  }

  init();

  function init() {
    button.addEventListener("click", toggleRunState);
    button.classList.toggle("pause", isRunning);
    updateClock();
    setInterval(() => {
      if (isRunning) {
        updateClock();
      }
    }, 1000);
  }

  function toggleRunState() {
    isRunning = !isRunning;
    button.classList.toggle("pause", isRunning);
    if (isRunning) {
      updateClock();
    }
  }

  function updateClock() {
    const now = new Date();
    hoursElement.textContent = adjustTimer(now.getHours());
    minutesElement.textContent = adjustTimer(now.getMinutes());
    secondsElement.textContent = adjustTimer(now.getSeconds());
    document.body.style.backgroundColor = rgbFromTime(
      now.getHours(),
      now.getMinutes(),
      now.getSeconds()
    );
  }

  function adjustTimer(value) {
    return value < 10 ? `0${value}` : `${value}`;
  }

  function rgbFromTime(hours, minutes, seconds) {
    const ranges = [23, 59, 59];
    const [r, g, b] = [hours, minutes, seconds].map((value, index) =>
      Math.round((value / ranges[index]) * 255)
    );
    return `rgb(${r}, ${g}, ${b})`;
  }
});
