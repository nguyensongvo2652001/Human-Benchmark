import reactionTimeView from "../views/reactionTimeView.js  ";
import reactionTimeModel from "../models/reactionTimeModel.js";
import { wait } from "../utils/helper.js";

class ReactionTimeController {
  constructor() {
    this.reactionTimeView = reactionTimeView;
    this.reactionTimeModel = reactionTimeModel;
  }

  async startGameController() {
    try {
      reactionTimeModel.resetState();

      const waitTime = reactionTimeModel.getWaitTime();

      reactionTimeView.renderWaitingScreen();

      await wait(waitTime);

      reactionTimeView.renderActiveScreen();

      reactionTimeModel.startClock();
    } catch (err) {
      console.log(err);
    }
  }

  activeScreenClickController() {
    reactionTimeModel.getReactionTime();

    reactionTimeModel.saveHighscoreToLocalStorage();

    const data = reactionTimeModel.getState();
    reactionTimeView.renderResult(data);
  }

  addStartGameController() {
    this.reactionTimeView.addStartGameController(this.startGameController);
  }

  addActiveScreenClickController() {
    this.reactionTimeView.addActiveScreenClickController(
      this.activeScreenClickController
    );
  }

  addControllers() {
    this.addStartGameController();
    this.addActiveScreenClickController();
  }
}

export default new ReactionTimeController();
