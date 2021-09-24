import {
  MAX_REACTION_GAME_WAIT_TIME,
  MIN_REACTION_GAME_WAIT_TIME,
} from "../config.js";
import { generateRandomInteger } from "../utils/helper.js";

class ReactionTimeModel {
  constructor() {
    this.maxWaitTime = MAX_REACTION_GAME_WAIT_TIME;
    this.minWaitTime = MIN_REACTION_GAME_WAIT_TIME;
    this.highScoreLocalStorageKey = "reactionTimeHighscore";
    this.initState();
  }

  resetState() {
    this.state = Object.assign(this.state, { waitTime: 0, startTime: 0 });
  }

  initState() {
    this.state = {
      waitTime: 0,
      startTime: 0,
      highScore: this.getHighscoreFromLocalStorage(),
    };
  }

  startClock() {
    this.state.startTime = Date.now();
  }

  generateWaitingTime() {
    this.state.waitTime = generateRandomInteger(
      this.minWaitTime,
      this.maxWaitTime
    );
  }

  getWaitTime() {
    this.generateWaitingTime();
    return this.state.waitTime;
  }

  getReactionTime() {
    this.state.reactionTime = Date.now() - this.state.startTime;
  }

  getState() {
    return this.state;
  }

  getHighscoreFromLocalStorage() {
    const highscore = localStorage.getItem(this.highScoreLocalStorageKey) ?? 0;
    return Number(highscore);
  }

  isNewHighScore(score) {
    return score < this.state.highScore || this.state.highScore === 0;
  }

  saveHighscoreToLocalStorage() {
    if (!this.isNewHighScore(this.state.reactionTime)) return;
    this.state.highScore = this.state.reactionTime;
    localStorage.setItem(this.highScoreLocalStorageKey, this.state.highScore);
  }
}

export default new ReactionTimeModel();
