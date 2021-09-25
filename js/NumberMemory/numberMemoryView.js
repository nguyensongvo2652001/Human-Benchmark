import GameView from "../GameView/gameView.js";

class NumberMemoryView extends GameView {
  constructor() {
    super();
    this.parentElement = document.querySelector(".number-memory");
  }

  generateDefaultMarkup() {
    return ` <ion-icon name="infinite" class="main__icon"></ion-icon>
    <div class="main__text-box">
      <div class="main__text">
        <h1 class="heading-primary">Number Memory</h1>
        <p class="main__description">
          The average person can remember 7 numbers at once. Can you do
          more ?
        </p>
      </div>
      <a class="btn btn--full main__button number-memory__play-button"
        >Let's play !</a
      >
    </div>`;
  }

  addPlayButtonClickController(controller) {
    this.parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      if (!e.target.classList.contains("number-memory__play-button")) return;
      controller();
    });
  }

  addFormSubmitController(controller) {
    this.parentElement.addEventListener(
      "click",
      this.formSubmitController.bind(this, controller)
    );
  }

  addNextButtonClickController(controller) {
    this.parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      if (!e.target.classList.contains("number-memory__next-button")) return;

      controller();
    });
  }

  formSubmitController(controller, e) {
    e.preventDefault();
    if (!e.target.classList.contains("number-memory__form-button")) return;
    const value = this.parentElement
      .querySelector(".number-memory__form-input")
      .value.trim();

    if (!value) return;

    controller(value);
  }

  renderNumberView(data) {
    this.data = data;

    const markup = this.generateNumberViewMarkup();

    this.render(markup);
  }

  renderForm() {
    const markup = this.generateFormMarkup();

    this.render(markup);
  }

  renderResultView(data) {
    this.data = data;

    const markup = this.generateResultViewMarkup();

    this.render(markup);
  }

  generateFormMarkup() {
    return `<form class="number-memory__form">
    <p class="number-memory__form-question">What was the number ?</p>
    <input class="number-memory__form-input form__input" type="text" />
    <a href="#" class="btn btn--full number-memory__form-button"
      >Check answer</a
    >
  </form>`;
  }

  generateNumberViewMarkup() {
    return `<div class="number-memory__number-box">
    <p class="number-memory__number">
      ${this.data.correctNumber}
    </p>
    <div class="number-memory__load-bar">
    <div class = 'number-memory__loading-bar'></div>
  </div>`;
  }

  generateResultViewMarkup() {
    let resultIcon = `<ion-icon
    name="close"
    class="number-memory__input-number-string-icon"
    ></ion-icon>`;

    let resultButton = `<a href="#" class="btn btn--full number-memory__play-button"
    >Try Again</a
  >`;

    if (this.data.correct) {
      resultIcon = `<ion-icon
    name="checkmark"
    class="number-memory__input-number-string-icon"
    ></ion-icon>`;

      resultButton = `<a href="#" class="btn btn--full number-memory__next-button"
    >Next</a
  >`;
    }

    return `<div class="number-memory__result">
    <div class="number-memory__correct-number-box">
      <p class="number-memory__label">Correct Number</p>
      <p class="number-memory__correct-number">${this.data.correctNumber}</p>
    </div>

    <div class="number-memory__input-number-box">
      <p class="number-memory__label">Your Number</p>
      <div
        class="
          number-memory__input-number-string
          number-memory__input-number-string--${
            this.data.correct ? "correct" : "incorrect"
          }
        "
      >
      ${resultIcon}
        <p class="number-memory__input-number">${this.data.inputNumber}</p>
      </div>
    </div>

    <p class="number-memory__level">Level ${this.data.level}</p>

    <p class="main__description number-memory__high-score">
      High score: ${this.data.highScore}
    </p>

    ${resultButton}
    `;
  }

  updateLoadingBar(percent) {
    this.parentElement.querySelector(
      ".number-memory__loading-bar"
    ).style.width = `${percent}%`;
  }
}

export default new NumberMemoryView();
