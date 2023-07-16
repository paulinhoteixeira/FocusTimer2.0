const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonMore = document.querySelector(".more5Minutes");
const buttonMinus = document.querySelector(".minus5Minutes");

let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

console.log(minutes);

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
