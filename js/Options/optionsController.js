import mainView from "../Main/mainView.js";
import optionsView from "./optionsView.js";

class OptionsController {
  addReactionTimeOptionClickController() {
    optionsView.addReactionTimeOptionClickController(
      mainView.showReactionTime.bind(mainView)
    );
  }

  addNumberMemoryOptionClickController() {
    optionsView.addNumberMemoryOptionClickController(
      mainView.showNumberMemory.bind(mainView)
    );
  }

  addControllers() {
    this.addReactionTimeOptionClickController();
    this.addNumberMemoryOptionClickController();
  }
}

export default new OptionsController();
