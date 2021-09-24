import { generateRandomInteger } from "../utils/helper.js";
import { REACTION_TIME_VIEW_NAME } from "../config.js";
import mainView from "../views/mainView.js";
import heroView from "../views/heroView.js";

class HeroController {
  constructor() {
    this.viewNames = [REACTION_TIME_VIEW_NAME];
    this.mainView = mainView;
    this.heroView = heroView;
  }

  showViewByName(viewName) {
    if (viewName === REACTION_TIME_VIEW_NAME) mainView.showReactionTime();
  }

  showRandomView() {
    const index = generateRandomInteger(this.viewNames.length - 1);
    const viewName = this.viewNames[index];

    this.showViewByName(viewName);
  }

  playButtonClickController() {
    this.showRandomView();
  }

  addPlayButtonClickController() {
    this.heroView.addPlayButtonClickController(
      this.playButtonClickController.bind(this)
    );
  }

  addControllers() {
    this.addPlayButtonClickController();
  }
}

export default new HeroController();
