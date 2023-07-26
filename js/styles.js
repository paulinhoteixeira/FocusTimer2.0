export default function () {
  const bgButtonForest = document.querySelector(".forestSound .bg");
  const bgButtonRain = document.querySelector(".rainSound .bg");
  const bgButtonCoffeeShop = document.querySelector(".coffeeShopSound .bg");
  const bgButtonBonfire = document.querySelector(".bonfireSound .bg");

  const shapeButtonForest = document.querySelector(".forestSound .shape");
  const shapeButtonRain = document.querySelector(".rainSound .shape");
  const shapeButtonCoffeeShop = document.querySelector(
    ".coffeeShopSound .shape"
  );
  const shapeButtonBonfire = document.querySelector(".bonfireSound .shape");

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
