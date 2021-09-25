import GameView from "../GameView/gameView.js";

class ReactionTimeView extends GameView {
  constructor() {
    super();
    this.parentElement = document.querySelector(".reaction-time");
  }

  renderWaitingScreen() {
    const markup = this.generateWaitingScreenMarkup();
    this.render(markup);
  }

  renderActiveScreen() {
    const markup = this.generateActiveScreenMarkup();
    this.render(markup);
  }

  renderResult(data) {
    this.data = data;

    const markup = this.generateResultMarkup();

    this.render(markup);
  }

  generateWaitingScreenMarkup() {
    return `<div class="reaction-time__screen reaction-time__screen--waiting">
    Wait for green
       </div>`;
  }

  generateActiveScreenMarkup() {
    return `<div class="reaction-time__screen reaction-time__screen--active">
    Click on the screen!
  </div> `;
  }

  generateResultMarkup() {
    return `<div class="reaction-time__result">
    <ion-icon name="time" class="main__icon"></ion-icon>
    <div class="main__text-box">
      <div class="main__text">
        <h1 class="heading-primary">${this.data.reactionTime} ms</h1>
        <p class="main__description">High score: ${this.data.highScore} ms</p>
      </div>
      <a class="btn btn--full main__button reaction-time__play-button">Try again !</a>
    </div>
  </div>`;
  }

  generateDefaultMarkup() {
    return `  <ion-icon name="flash" class="main__icon"></ion-icon>
    <div class="main__text-box">
      <div class="main__text">
        <h1 class="heading-primary">Reaction Time Test</h1>
        <p class="main__description">
          When the box turns green, click as quickly as you can.
        </p>
      </div>
      <a class="btn btn--full main__button reaction-time__play-button"
        >Let's play !</a
      >
    </div>`;
  }

  addStartGameController(controller) {
    this.parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      if (!e.target.classList.contains("reaction-time__play-button")) return;
      controller();
    });
  }

  addActiveScreenClickController(controller) {
    this.parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      if (!e.target.classList.contains("reaction-time__screen--active")) return;
      controller();
    });
  }
}

export default new ReactionTimeView();
