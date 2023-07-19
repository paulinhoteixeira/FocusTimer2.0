const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonMore = document.querySelector(".more5Minutes");
const buttonMinus = document.querySelector(".minus5Minutes");
const buttonForestSound = document.querySelector(".forestSound");
const buttonRainSound = document.querySelector(".rainSound");
const buttonCoffeeShopSound = document.querySelector(".coffeeShopSound");
const buttonBonfireSound = document.querySelector(".bonfireSound");


const buttonPressAudio = new Audio(
  "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
);
const forestSound = new Audio("./assets/Floresta.wav");
const rainSound = new Audio("./assets/Chuva.wav");
const coffeeShopSound = new Audio("./assets/Cafeteria.wav");
const bonfireSound = new Audio("./assets/Lareira.wav");

let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let time;

function countdown() {
  let newSeconds = Number(seconds.textContent);
  let newMinutes = Number(minutes.textContent);

  time = setTimeout(() => {
    if (newSeconds == 0 && newMinutes == 0) {
      seconds.textContent = String(newSeconds).padStart(2, "0");

      return;
    }

    if (newSeconds == 0) {
      newMinutes = newMinutes - 1;
      newSeconds = 60;
    }

    newSeconds = newSeconds - 1;
    seconds.textContent = String(newSeconds).padStart(2, "0");
    minutes.textContent = String(newMinutes).padStart(2, "0");

    countdown();
  }, 1000);
}

function resetTimer() {
  clearTimeout(time);
  minutes.textContent = 25;
  seconds.textContent = String(0).padStart(2, "0");
}

function pressButton() {
  buttonPressAudio.play();
}

function bgSound(sound) {
  forestSound.pause();
  rainSound.pause();
  coffeeShopSound.pause();
  bonfireSound.pause();

  switch (sound) {
    case "forest":
      forestSound.play();
      forestSound.loop = true;
      break;
    case "rain":
      rainSound.play();
      rainSound.loop = true;
      break;
    case "coffeeShop":
      coffeeShopSound.play();
      coffeeShopSound.loop = true;
      break;
    case "bonfire":
      bonfireSound.play();
      bonfireSound.loop = true;
      break;
  }
}

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  pressButton();
  countdown();
});

buttonPause.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  pressButton();
  clearTimeout(time);
});

buttonStop.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  pressButton();
  resetTimer();
});

buttonMore.addEventListener("click", function () {
  let newMinutes = Number(minutes.textContent) + 5;
  minutes.textContent = String(newMinutes).padStart(2, "0");
  pressButton();
});

buttonMinus.addEventListener("click", function () {
  let newMinutes =
    Number(minutes.textContent) == 0 ? 0 : Number(minutes.textContent) - 5;
  // let newMinutes = String(moreMinutes).padStart(2, '0')
  minutes.textContent = String(newMinutes).padStart(2, "0");
  pressButton();
});

buttonForestSound.addEventListener("click", function () {
  bgSound("forest");
});

buttonRainSound.addEventListener("click", function () {
  bgSound("rain");
});

buttonCoffeeShopSound.addEventListener("click", function () {
  bgSound("coffeeShop");
});

buttonBonfireSound.addEventListener("click", function () {
  bgSound("bonfire");
});

