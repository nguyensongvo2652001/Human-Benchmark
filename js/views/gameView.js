class GameView {
  setActive() {
    this.parentElement.classList.add("main__section--active");
  }

  setInactive() {
    this.parentElement.classList.remove("main__section--active");
  }
}

export default GameView;
