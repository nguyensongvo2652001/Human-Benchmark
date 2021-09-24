import heroView from "./heroView.js";
import reactionTimeView from "./reactionTimeView.js";

class MainView {
  constructor() {
    this.parentElement = document.querySelector(".main");
    this.views = [heroView, reactionTimeView];
  }

  setAllViewsInactive() {
    this.views.forEach((view) => view.setInactive());
  }

  showHero() {
    this.setAllViewsInactive();
    heroView.setActive();
  }

  showReactionTime() {
    this.setAllViewsInactive();
    reactionTimeView.setActive();
  }
}

export default new MainView();
