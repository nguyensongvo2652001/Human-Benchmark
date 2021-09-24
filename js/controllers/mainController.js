import mainView from "../views/mainView.js";
import optionsView from "../views/optionsView.js";

class MainController {
  constructor() {
    this.mainView = mainView;
    this.optionsView = optionsView;
  }

  showDefault() {
    mainView.showHero();
  }

  reactionTimeOptionClickController() {
    mainView.showReactionTime();
  }

  addReactionTimeOptionClickController() {
    optionsView.addReactionTimeOptionClickController(
      this.reactionTimeOptionClickController
    );
  }

  addControllers() {
    this.addReactionTimeOptionClickController();
  }
}

export default new MainController();
