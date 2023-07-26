import { 
  bgButtonForest,
  bgButtonRain,
  bgButtonCoffeeShop,
  bgButtonBonfire,
  shapeButtonForest,
  shapeButtonRain,
  shapeButtonCoffeeShop,
  shapeButtonBonfire
} from "./elements.js"

export default function () {
  

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

  return {
    resetColors,
    changeButtonColor,
  };
}
