import GameView from "../GameView/gameView.js";

class HeroView extends GameView {
  constructor() {
    super();
    this.parentElement = document.querySelector(".hero");
  }

  generateDefaultMarkup() {
    return `<ion-icon name="flash" class="main__icon"></ion-icon>
    <div class="main__text-box">
      <div class="main__text">
        <h1 class="heading-primary">Human Benchmark</h1>
        <p class="main__description">
          Measure your abilities with brain games and cognitive tests
        </p>
      </div>
      <a class="btn btn--full main__button hero__play-button"
        >Get started</a
      >
    </div>`;
  }

  addPlayButtonClickController(controller) {
    this.parentElement.addEventListener("click", function (e) {
      if (!e.target.classList.contains("hero__play-button")) return;
      controller();
    });
  }
}

export default new HeroView();
