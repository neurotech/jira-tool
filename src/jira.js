const cpjax = require("cpjax");

let username = process.env.JIRA_USERNAME;
let password = process.env.JIRA_PASSWORD;

const search = function searchJIRA(key, callback) {
  cpjax(
    {
      url: `https://jira.phocas.biz:8443/rest/api/2/search?jql=key="DEV-${key}"`,
      auth:
        "Basic " +
        new Buffer(username + ":" + password, "utf8").toString("base64")
    },
    function(err, data) {
      if (err) callback(err);
      let parsed = JSON.parse(data);
      let issue = {
        key: parsed.issues[0].key,
        summary: parsed.issues[0].fields.summary.trim()
      };
      return callback(null, issue);
    }
  );
};

module.exports = { search };
