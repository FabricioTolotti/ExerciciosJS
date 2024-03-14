var banners = ["img/banner1.png", "img/banner2.png", "img/banner3.png"];
var bannerAtual = 0;
var intervalo;
var pausado = false;

function trocaBanner() {
    if (!pausado) {
        bannerAtual = (bannerAtual + 1) % 3;
        document.getElementById('imgBanner').src = banners[bannerAtual];
    }
}

function togglePause() {
    pausado = !pausado;
    var pauseButton = document.getElementById('pauseButton');
    if (pausado) {
        clearInterval(intervalo);
        pauseButton.textContent = 'Play';
    } else {
        intervalo = setInterval(trocaBanner, 4000);
        pauseButton.textContent = 'Pause';
    }
}

document.getElementById('pauseButton').addEventListener('click', togglePause);

intervalo = setInterval(trocaBanner, 4000);