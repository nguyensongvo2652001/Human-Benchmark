import reactionTimeController from "./controllers/reactionTimeController.js";
import heroController from "./controllers/heroController.js";
import mainController from "./controllers/mainController.js";

const init = function () {
  mainController.showDefault();

  mainController.addControllers();
  reactionTimeController.addControllers();
  heroController.addControllers();
};

init();
