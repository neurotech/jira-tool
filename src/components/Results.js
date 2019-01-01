const results = function createResultsComponent(fastn) {
  return fastn("templater", {
    data: fastn.binding("results", "isLoading", (results, isLoading) => ({
      results,
      isLoading
    })),
    template: model => {
      var { results, isLoading } = model.get("item") || {};
      if (results) {
        return fastn(
          "div",
          { class: "results" },
          fastn("div", { class: "issue-key" }, fastn.binding("key")),
          " - ",
          fastn("div", { class: "issue-summary" }, fastn.binding("summary"))
        ).binding("item.results");
      }

      if (isLoading) {
        return fastn("div", "LOADING!");
      }

      return fastn("div", "Please enter a issue number above and hit ENTER!");
    }
  });
};

module.exports = results;
