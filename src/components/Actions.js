const copy = require("copy-text-to-clipboard");

const actions = function createActionsComponent(fastn, app) {
  return fastn(
    "div",
    { class: "actions" },
    fastn(
      "div",
      {
        class: fastn.binding("results", function(results) {
          return `action-button copy ${results ? "active" : "inactive"}`;
        })
      },
      "Copy Markdown"
    ).on("click", () => {
      var markdown = app.getMarkdown();
      copy(markdown);

      var button = document.querySelector(".action-button.copy");
      button.classList.add("copied");
      button.innerText = "Copied!";
      setTimeout(function removeCopied() {
        button.classList.remove("copied");
        button.innerText = "Copy Issue Summary";
      }, 1000);
    })
  );
};

module.exports = actions;
