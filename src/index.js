var fastn = require("fastn")(require("fastn/domComponents")());
const components = require("./components");
const jira = require("./jira");

window.addEventListener("load", function() {
  var state = { isLoading: false };
  var app = {
    clearResults: () => {
      fastn.Model.remove(state, "results");
    },
    setSearch: value => {
      fastn.Model.set(state, "search", value);
      app.loadData(value);
    },
    loadData: value => {
      fastn.Model.set(state, "isLoading", true);
      jira.search(value, function(err, data) {
        fastn.Model.remove(state, "isLoading");
        if (err) return console.error(err);
        fastn.Model.set(state, "results", data);
      });
    }
  };
  const view = fastn(
    "div",
    { class: "container" },
    components.SearchBox(fastn, app),
    components.Results(fastn),
    components.Actions(fastn)
  );
  view.attach(state);
  view.render();

  const mount = document.getElementById("app");
  mount.appendChild(view.element);
});
