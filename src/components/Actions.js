// TODO: TIDY Conditional CSS classes to disable/enable buttons
const copy = require("copy-text-to-clipboard");

const actions = function createActionsComponent(fastn) {
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
      "Copy Issue Summary"
    ).on("click", () => {
      var button = document.querySelector(".action-button.copy");
      var text = document.querySelector(".issue").innerText;
      copy(text);
      button.classList.add("copied");
      button.innerText = "Copied!";
      setTimeout(function removeCopied() {
        button.classList.remove("copied");
        button.innerText = "Copy Issue Summary";
      }, 1000);
    }),
    fastn(
      "div",
      {
        class: fastn.binding("results", function(results) {
          return `action-button open ${results ? "active" : "inactive"}`;
        })
      },
      "Open Issue in JIRA"
    ).on("click", event => {
      event.preventDefault();
      const { shell } = window.require("electron");
      const jiraURL = process.env.JIRA_URL;
      const key = document.querySelector(".results").getAttribute("data-key");
      shell.openExternal(`${jiraURL}/browse/${key}`);
    })
  );
};

module.exports = actions;
