const searchBox = function createSearchComponent(fastn, app) {
  var searchForm = fastn(
    "form",
    fastn("input", {
      class: "search-box",
      value: fastn.binding("searchString"),
      autofocus: true,
      onchange: "value:value"
    })
  )
    .on("submit", (event, scope) => {
      event.preventDefault();
      app.clearResults();
      app.setSearch(scope.get("searchString"));
    })
    .attach({});

  return searchForm;
};

module.exports = searchBox;
