// TODO: TIDY Conditional CSS classes to disable/enable buttons

const copy = require("copy-text-to-clipboard");

const actions = function createActionsComponent(fastn) {
  return fastn(
    "div",
    fastn(
      "button",
      {
        class: fastn.binding("results", function(results) {
          return !results ? "blbb" : "quiggle";
        }),
        display: fastn.binding("results")
      },
      "COPY"
    ).on("click", () => {
      var text = document.querySelector(".results").innerText;
      copy(text);
    }),
    fastn("button", { display: fastn.binding("results") }, "OPEN")
  );
};

module.exports = actions;
