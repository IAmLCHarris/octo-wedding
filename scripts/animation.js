const overlayContainer = document.getElementById("overlay-container");
const topFlap = document.getElementById("top-flap");

const envelopeContainer = document.getElementById("envelope-container");

const musicPlayer = document.getElementById("music");
const volumeControl = document.getElementById("slider");
const musicToggle = document.getElementById("music-toggle");

const heroline = document.getElementById("heroline");
const subline = document.getElementById("subline");

musicPlayer.volume = volumeControl.value / 100;
var isPlaying = true;

volumeControl.oninput = function () {
  const sliderValue = volumeControl.value / 100;
  musicPlayer.volume = sliderValue;
};

function wiggle() {
  envelopeContainer.classList.toggle("wiggle");
  setTimeout(() => {
    envelopeContainer.classList.toggle("wiggle");
  }, 100);
}

wiggleKill = setInterval(wiggle, 1500);

overlayContainer.addEventListener("click", function () {
  topFlap.classList.toggle("animate");
  musicPlayer.play();
  isPlaying = true;
  setTimeout(() => {
    overlayContainer.classList.toggle("fade");
  }, 600);
  setTimeout(() => {
    overlayContainer.style.display = "none";
  }, 1600);
  clearInterval(wiggleKill);
});

musicToggle.addEventListener("click", function () {
  if (isPlaying == true) {
    isPlaying = false;
    musicPlayer.pause();
    musicToggle.src = "media/musicnotecrossed.png";
  } else {
    isPlaying = true;
    musicPlayer.play();
    musicToggle.src = "media/musicnote.png";
  }
});

window.onscroll = function () {
  if (window.innerWidth >= 600) {
    heroline.style.fontSize = "5vw";
    subline.style.fontSize = "2vw";
  }
};
