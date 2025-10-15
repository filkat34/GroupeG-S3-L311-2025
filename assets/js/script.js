window.addEventListener("DOMContentLoaded", (event) => {
    let is_run = "true";

    init(); // Lance la fonction d'initialisation des écouteurs d'événements
    setTimeInterval();

    /*
    Fonction qui permet d'initialiser les écouteurs d'événements
    1. Ajoute un écouteur d'événement 'click' sur le bouton avec la classe 'button'
    2. Lorsque le bouton est cliqué, il inverse l'état de la variable is_run (true/false)
    3. Si is_run est true, il ajoute la classe 'pause' au bouton
    4. Si is_run est false, il supprime la classe 'pause' au bouton
     */
    function init() {
        document.querySelector('.button').addEventListener('click', (event) => {
            is_run = !is_run;
            ((' ' + document.querySelector('.button').className + ' ').indexOf('pause') > -1) ? document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class').replace(' pause', '')) : document.querySelector('.button').setAttribute('class', document.querySelector('.button').getAttribute('class') + ' pause');
        });
    }

    /*
    Fonction qui permet de mettre à jour l'horloge
     */
    function setTimeInterval() {
        setInterval(function () {
            if (is_run) {
                let oDate = new Date();
                document.querySelector('#hours').innerHTML = adjustTimer(oDate.getHours());
                document.querySelector('#minutes').innerHTML = adjustTimer(oDate.getMinutes());
                document.querySelector('#seconds').innerHTML = adjustTimer(oDate.getSeconds());

                document.querySelector('body').style.background = randomHexColor(document.querySelector('#hours').innerHTML, document.querySelector('#minutes').innerHTML, document.querySelector('#seconds').innerHTML);
            }
        }, 1000);
    }

    function adjustTimer(timer) {
        return (timer < 10 ? '0' + timer : timer);
    }

    function randomHexColor(x, y) {
        return "rgb(" + Math.floor(x / 100 * 256) + "," + Math.floor(y / 100 * 256) + "," + Math.floor(z / 100 * 256) + ")";
    }
});