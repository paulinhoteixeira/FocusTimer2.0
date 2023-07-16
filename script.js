const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonMore = document.querySelector(".more5Minutes");
const buttonMinus = document.querySelector(".minus5Minutes");

let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

console.log(minutes);

function countdown() {
  let newSeconds = Number(seconds.textContent);
  let newMinutes = Number(minutes.textContent);

  setTimeout(() => {
    
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

buttonPlay.addEventListener("click", function () {
  countdown();
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
