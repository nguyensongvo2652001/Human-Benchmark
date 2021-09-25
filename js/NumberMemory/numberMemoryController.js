import numberMemoryView from "./numberMemoryView.js";
import numberMemoryModel from "./numberMemoryModel.js";

class NumberMemoryController {
  playButtonClickController() {
    numberMemoryModel.resetState();

    this.prepareNumberView();
  }

  prepareNumberView() {
    numberMemoryModel.getCorrectNumber();
    numberMemoryModel.getNewWaitingTime();

    numberMemoryView.renderNumberView(numberMemoryModel.getState());

    this.numberViewController();
  }

  updateWaitTimeLeft(interval) {
    const waitTimeLeft = numberMemoryModel.getWaitTimeLeft();

    const newWaitTimeLeft = waitTimeLeft - interval;

    numberMemoryModel.updateWaitTimeLeft(newWaitTimeLeft);

    const loadingBarPercent =
      (numberMemoryModel.getWaitTimeLeft() /
        numberMemoryModel.getWaitingTime()) *
      100;
    numberMemoryView.updateLoadingBar(loadingBarPercent);
  }

  waitingTimeController(interval) {
    this.updateWaitTimeLeft(interval);
    if (numberMemoryModel.getWaitTimeLeft() <= 0) {
      clearInterval(this.loadingTimer);
      numberMemoryView.renderForm();
    }
  }

  numberViewController() {
    this.updateWaitTimeLeft(10);
    this.loadingTimer = setInterval(
      this.waitingTimeController.bind(this, 10),
      10
    );
  }

  formSubmitController(value) {
    numberMemoryModel.updateInputNumber(value);

    const isCorrectNumber = numberMemoryModel.checkCorrectNumber();

    if (isCorrectNumber && numberMemoryModel.isNewHighscore()) {
      numberMemoryModel.updateHighscore();
      numberMemoryModel.saveHighscoreToLocalStorage();
    }

    const data = numberMemoryModel.getState();
    numberMemoryView.renderResultView(data);
  }

  nextButtonClickController() {
    numberMemoryModel.updateLevel();

    this.prepareNumberView();
  }

  addFormSubmitController() {
    numberMemoryView.addFormSubmitController(
      this.formSubmitController.bind(this)
    );
  }

  addPlayButtonClickController() {
    numberMemoryView.addPlayButtonClickController(
      this.playButtonClickController.bind(this)
    );
  }

  addNextButtonClickController() {
    numberMemoryView.addNextButtonClickController(
      this.nextButtonClickController.bind(this)
    );
  }

  addControllers() {
    this.addPlayButtonClickController();
    this.addFormSubmitController();
    this.addNextButtonClickController();
  }
}

export default new NumberMemoryController();
