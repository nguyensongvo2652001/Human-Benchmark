import mainView from "../Main/mainView.js";
import heroView from "./heroView.js";

class HeroController {
  constructor() {
    this.mainView = mainView;
    this.heroView = heroView;
  }

  playButtonClickController() {
    this.mainView.showRandomView();
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
