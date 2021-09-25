class OptionsView {
  constructor() {
    this.parentElement = document.querySelector(".options");
  }

  addOptionClickController(controller, optionClass) {
    this.parentElement.addEventListener("click", function (e) {
      if (!e.target.closest(`.${optionClass}`)) return;
      controller();
    });
  }

  addReactionTimeOptionClickController(controller) {
    this.addOptionClickController(controller, `option__reaction-time`);
  }

  addNumberMemoryOptionClickController(controller) {
    this.addOptionClickController(controller, `option__number-memory`);
  }
}

export default new OptionsView();
