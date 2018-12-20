// const jira = require("../jira");

const searchBox = function createSearchComponent(fastn, app) {
  var searchForm = fastn(
    "form",
    fastn("input", {
      value: fastn.binding("searchString"),
      onchange: "value:value" // take <input>.value -> put into component.value
    })
  )
    .on("submit", (event, scope) => {
      event.preventDefault();
      app.setSearch(scope.get("searchString"));
    })
    .attach({}); // Maintain its own scope

  return searchForm;
};

module.exports = searchBox;
