const results = function createResultsComponent(fastn) {
  return fastn("templater", {
    data: fastn.binding("results", "isLoading", (results, isLoading) => ({
      results,
      isLoading
    })),
    template: model => {
      var { results, isLoading } = model.get("item") || {};
      var issue = fastn("div", { class: "issue" }, fastn.binding("combined"));
      var status = fastn(
        "div",
        { class: "status" },
        fastn(
          "div",
          {
            class: fastn.binding("status", function(status) {
              return `bubble ${
                status ? status.replace(/\s+/g, "-").toLowerCase() : ""
              }`;
            })
          },
          fastn.binding("status")
        )
      );
      var resultsComponent = fastn(
        "div",
        {
          class: `results ${isLoading ? "loading" : ""} ${
            !results && !isLoading ? "empty" : ""
          }`,
          "data-key": fastn.binding("key")
        },
        !results && !isLoading ? "Please enter an issue key above." : null,
        !results && isLoading ? "Querying JIRA..." : null,
        results ? issue : null,
        results ? status : null
      ).binding("item.results");

      return resultsComponent;
    }
  });
};

module.exports = results;
