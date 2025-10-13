window.addEventListener("DOMContentLoaded", () => {
  // Elements du DOM
  const btn = document.querySelector(".button");
  const body = document.querySelector("body");
  const hours = document.querySelector("#hours");
  const minutes = document.querySelector("#minutes");
  const seconds = document.querySelector("#seconds");

  // Variables
  let is_run = true;

  /**
   * Fonction d'initialisation
   * Initialise les éléments et les événements
   */
  function init() {
    // Gestion du clic sur le bouton (pause/reprise)
    btn.addEventListener("click", () => {
      is_run = !is_run;
      if (is_run) {
        btn.classList.add("pause");
      } else {
        btn.classList.remove("pause");
      }
    });

    // Mise à jour de l'heure et du fond toutes les secondes
    setInterval(function () {
      if (is_run) {
        let oDate = new Date();
        hours.innerHTML = adjustTimer(oDate.getHours());
        minutes.innerHTML = adjustTimer(oDate.getMinutes());
        seconds.innerHTML = adjustTimer(oDate.getSeconds());

        body.style.background = randomHexColor(
          hours.innerHTML,
          minutes.innerHTML,
          seconds.innerHTML
        );
      }
    }, 1000);
  }

  // Ajoute un zéro devant les nombres inférieurs à 10
  function adjustTimer(timer) {
    return timer < 10 ? "0" + timer : timer;
  }

  // Génère une couleur RGB basée à partir des valeurs passées en paramètre
  function randomHexColor(x, y, z) {
    return (
      "rgb(" +
      Math.floor((x / 100) * 256) +
      "," +
      Math.floor((y / 100) * 256) +
      "," +
      Math.floor((z / 100) * 256) +
      ")"
    );
  }

  //Appel de la fonction d'initialisation
  init();
});
