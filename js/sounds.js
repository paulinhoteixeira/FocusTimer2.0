export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const bgAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"
  );
  const forestSound = new Audio("./assets/Floresta.wav");
  const rainSound = new Audio("./assets/Chuva.wav");
  const coffeeShopSound = new Audio("./assets/Cafeteria.wav");
  const bonfireSound = new Audio("./assets/Lareira.wav");

  bgAudio.loop = true;

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

  function timeEnd() {
    kitchenTimer.play();
  }
  return {
    pressButton,
    timeEnd,
    bgAudio,
    bgSound,
  };
}
