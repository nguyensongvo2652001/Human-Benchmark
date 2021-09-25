class GameView {
  setActive() {
    this.parentElement.classList.add("main__section--active");
    this.renderDefault();
  }

  setInactive() {
    this.parentElement.classList.remove("main__section--active");
  }

  clear() {
    this.parentElement.innerHTML = "";
  }

  renderDefault() {
    const markup = this.generateDefaultMarkup();

    this.render(markup);
  }

  render(markup) {
    this.clear();
    this.parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}

export default GameView;
