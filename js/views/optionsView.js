class OptionsView {
  constructor() {
    this.parentElement = document.querySelector(".options");
  }

  addReactionTimeOptionClickController(controller) {
    this.parentElement.addEventListener("click", function (e) {
      if (!e.target.closest(".option__reaction-time")) return;
      controller();
    });
  }
}

export default new OptionsView();
