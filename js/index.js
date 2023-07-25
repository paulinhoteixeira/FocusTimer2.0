import Sounds from "./sounds.js"

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonMore = document.querySelector(".more5Minutes");
const buttonMinus = document.querySelector(".minus5Minutes");
const buttonForestSound = document.querySelector(".forestSound");
const buttonRainSound = document.querySelector(".rainSound");
const buttonCoffeeShopSound = document.querySelector(".coffeeShopSound");
const buttonBonfireSound = document.querySelector(".bonfireSound");

const bgButtonForest = document.querySelector(".forestSound .bg");
const bgButtonRain = document.querySelector(".rainSound .bg");
const bgButtonCoffeeShop = document.querySelector(".coffeeShopSound .bg");
const bgButtonBonfire = document.querySelector(".bonfireSound .bg");

const shapeButtonForest = document.querySelector(".forestSound .shape");
const shapeButtonRain = document.querySelector(".rainSound .shape");
const shapeButtonCoffeeShop = document.querySelector(".coffeeShopSound .shape");
const shapeButtonBonfire = document.querySelector(".bonfireSound .shape");

const sounds = Sounds()


let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let time;

function countdown() {
  let newSeconds = Number(seconds.textContent);
  let newMinutes = Number(minutes.textContent);

  time = setTimeout(() => {
    if (newSeconds == 0 && newMinutes == 0) {
      seconds.textContent = String(newSeconds).padStart(2, "0");
      sounds.timeEnd()
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


function resetColors() {
  bgButtonForest.classList.remove("bgPressed");
  shapeButtonForest.classList.remove("buttonPressed");
  bgButtonRain.classList.remove("bgPressed");
  shapeButtonRain.classList.remove("buttonPressed");
  bgButtonCoffeeShop.classList.remove("bgPressed");
  shapeButtonCoffeeShop.classList.remove("buttonPressed");
  bgButtonBonfire.classList.remove("bgPressed");
  shapeButtonBonfire.classList.remove("buttonPressed");
}

function changeButtonColor(sound) {
  resetColors();

  switch (sound) {
    case "forest":
      bgButtonForest.classList.add("bgPressed");
      shapeButtonForest.classList.add("buttonPressed");
      break;
    case "rain":
      bgButtonRain.classList.add("bgPressed");
      shapeButtonRain.classList.add("buttonPressed");
      break;
    case "coffeeShop":
      bgButtonCoffeeShop.classList.add("bgPressed");
      shapeButtonCoffeeShop.classList.add("buttonPressed");
      break;
    case "bonfire":
      bgButtonBonfire.classList.add("bgPressed");
      shapeButtonBonfire.classList.add("buttonPressed");
      break;
  }
}

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  sounds.pressButton();
  countdown();
});

buttonPause.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  sounds.pressButton();
  clearTimeout(time);
});

buttonStop.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  sounds.pressButton();
  resetTimer();
});

buttonMore.addEventListener("click", function () {
  let newMinutes = Number(minutes.textContent) + 5;
  minutes.textContent = String(newMinutes).padStart(2, "0");
  sounds.pressButton();
});

buttonMinus.addEventListener("click", function () {
  let newMinutes =
    Number(minutes.textContent) == 0 ? 0 : Number(minutes.textContent) - 5;
  minutes.textContent = String(newMinutes).padStart(2, "0");
  sounds.pressButton();
});

buttonForestSound.addEventListener("click", function () {
  changeButtonColor("forest");
  sounds.bgSound("forest");
});

buttonRainSound.addEventListener("click", function () {
  changeButtonColor("rain");
  sounds.bgSound("rain");
});

buttonCoffeeShopSound.addEventListener("click", function () {
  changeButtonColor("coffeeShop");
  sounds.bgSound("coffeeShop");
});

buttonBonfireSound.addEventListener("click", function () {
  changeButtonColor("bonfire");
  sounds.bgSound("bonfire");
});
