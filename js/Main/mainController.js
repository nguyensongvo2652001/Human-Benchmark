import mainView from "./mainView.js";
import optionsView from "../Options/optionsView.js";

class MainController {
  constructor() {
    this.mainView = mainView;
    this.optionsView = optionsView;
  }

  showDefault() {
    mainView.showHero();
  }
}

export default new MainController();
