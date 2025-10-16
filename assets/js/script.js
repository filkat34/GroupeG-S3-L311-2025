window.addEventListener("DOMContentLoaded", () => {
  // Lance l'initialisation quand la page est prête
  let isRunning = true;
  const button = document.querySelector(".controls .button");
  const hoursElement = document.querySelector("#hours");
  const minutesElement = document.querySelector("#minutes");
  const secondsElement = document.querySelector("#seconds");

  if (!button || !hoursElement || !minutesElement || !secondsElement) {
    // Signale une configuration invalide et stoppe tout
    console.error("Éléments du minuteur introuvables.");
    return;
  }

  init();

  function init() {
    // Configure les interactions et la mise à jour périodique
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
    // Bascule entre pause et lecture
    isRunning = !isRunning;
    button.classList.toggle("pause", isRunning);
    if (isRunning) {
      updateClock();
    }
  }

  function updateClock() {
    // Rafraîchit l'heure affichée et la couleur du fond
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
    // Force un affichage sur deux chiffres
    return value < 10 ? `0${value}` : `${value}`;
  }

  function rgbFromTime(hours, minutes, seconds) {
    // Transforme l'heure en composantes RGB
    const ranges = [23, 59, 59];
    const [r, g, b] = [hours, minutes, seconds].map((value, index) =>
      Math.round((value / ranges[index]) * 255)
    );
    return `rgb(${r}, ${g}, ${b})`;
  }
});
