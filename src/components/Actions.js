// TODO: Conditional CSS classes to disable/enable buttons

const copy = require("copy-text-to-clipboard");

const actions = function createActionsComponent(fastn) {
  return fastn(
    "div",
    fastn("button", "COPY").on("click", (event, scope) => {
      var text = document.querySelector(".issue-summary").innerText;
      copy(text);
    }),
    fastn("button", { display: fastn.binding("results") }, "OPEN")
  );
};

module.exports = actions;
