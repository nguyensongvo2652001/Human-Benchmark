import GameView from "./gameView.js";

class HeroView extends GameView {
  constructor() {
    super();
    this.parentElement = document.querySelector(".hero");
  }

  addPlayButtonClickController(controller) {
    this.parentElement.addEventListener("click", function (e) {
      if (!e.target.classList.contains("hero__play-button")) return;
      controller();
    });
  }
}

export default new HeroView();
