import pressButton from "./sounds.js"
const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonMore = document.querySelector(".more5Minutes");
const buttonMinus = document.querySelector(".minus5Minutes");

let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let time

console.log(minutes);

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
  clearTimeout(time)
  minutes.textContent = 25;
  seconds.textContent = String(0).padStart(2, "0");
}

buttonPlay.addEventListener("click", function () {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  pressButton()
  countdown();
});

buttonPause.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  clearTimeout(time)

});

buttonStop.addEventListener("click", function () {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  resetTimer();
});

buttonMore.addEventListener("click", function () {
  let newMinutes = Number(minutes.textContent) + 5;
  minutes.textContent = String(newMinutes).padStart(2, "0");
});

buttonMinus.addEventListener("click", function () {
  let newMinutes =
    Number(minutes.textContent) == 0 ? 0 : Number(minutes.textContent) - 5;
  // let newMinutes = String(moreMinutes).padStart(2, '0')
  minutes.textContent = String(newMinutes).padStart(2, "0");
});
