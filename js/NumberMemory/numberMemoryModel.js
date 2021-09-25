import { generateRandomNumberString } from "../utils/helper.js";
import {
  MIN_LEVEL,
  MIN_NUMBER_MEMORY_WAIT_TIME,
  NUMBER_MEMORY_WAIT_TIME_PER_DIGIT,
} from "../config.js";

class NumberMemoryModel {
  constructor() {
    this.waitTimePerDigit = NUMBER_MEMORY_WAIT_TIME_PER_DIGIT;
    this.highScoreLocalStorageKey = "numberMemoryHighscore";
    this.initState();
  }

  initState() {
    this.state = {
      level: MIN_LEVEL,
      highScore: this.getHighscoreFromLocalStorage(),
      waitTime: MIN_NUMBER_MEMORY_WAIT_TIME,
      waitTimeLeft: 0,
      correctNumber: "",
      inputNumber: "",
      correct: true,
    };
  }

  resetState() {
    this.state = Object.assign(this.state, {
      level: MIN_LEVEL,
    });
  }

  getLevel() {
    return this.state.level;
  }

  getNewWaitingTime() {
    this.state.waitTime +=
      this.waitTimePerDigit * (this.state.level - MIN_LEVEL);

    this.updateWaitTimeLeft(this.state.waitTime);
    return this.state.waitTime;
  }

  getWaitingTime() {
    return this.state.waitTime;
  }

  getCorrectNumber() {
    this.state.correctNumber = generateRandomNumberString(this.state.level);
    return this.state.correctNumber;
  }

  getState() {
    return this.state;
  }

  getWaitTimeLeft() {
    return this.state.waitTimeLeft;
  }

  updateInputNumber(value) {
    this.state.inputNumber = value;
  }

  updateWaitTimeLeft(newWaitTimeLeft) {
    this.state.waitTimeLeft = newWaitTimeLeft;
  }

  checkCorrectNumber() {
    this.state.correct = this.state.inputNumber === this.state.correctNumber;
    return this.state.correct;
  }

  updateLevel() {
    this.state.level += 1;
  }

  isNewHighscore() {
    return this.state.level > this.state.highScore;
  }

  updateHighscore() {
    this.state.highScore = Math.max(this.state.highScore, this.state.level);
  }

  getHighscoreFromLocalStorage() {
    const highscore = localStorage.getItem(this.highScoreLocalStorageKey) ?? 0;
    return Number(highscore);
  }

  saveHighscoreToLocalStorage() {
    localStorage.setItem(this.highScoreLocalStorageKey, this.state.highScore);
  }
}

export default new NumberMemoryModel();
