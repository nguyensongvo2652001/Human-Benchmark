import { generateRandomElementFromArray } from "../utils/helper.js";

import heroView from "../Hero/heroView.js";
import reactionTimeView from "../ReactionTime/reactionTimeView.js";
import numberMemoryView from "../NumberMemory/numberMemoryView.js";

class MainView {
  constructor() {
    this.parentElement = document.querySelector(".main");
    this.views = [heroView, reactionTimeView, numberMemoryView];
  }

  setAllViewsInactive() {
    this.views.forEach((view) => view.setInactive());
  }

  showRandomView() {
    const view = generateRandomElementFromArray(this.views.slice(1));

    this.setAllViewsInactive();

    view.setActive();
  }

  showHero() {
    this.setAllViewsInactive();
    heroView.setActive();
  }

  showReactionTime() {
    this.setAllViewsInactive();
    reactionTimeView.setActive();
  }

  showNumberMemory() {
    this.setAllViewsInactive();
    numberMemoryView.setActive();
  }
}

export default new MainView();
