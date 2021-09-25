import reactionTimeController from "./ReactionTime/reactionTimeController.js";
import numberMemoryController from "./NumberMemory/numberMemoryController.js";
import heroController from "./Hero/heroController.js";
import mainController from "./Main/mainController.js";
import optionsController from "./Options/optionsController.js";

const init = function () {
  mainController.showDefault();

  optionsController.addControllers();
  reactionTimeController.addControllers();
  numberMemoryController.addControllers();
  heroController.addControllers();
};

init();
