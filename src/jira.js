const cpjax = require("cpjax");

let jiraURL = process.env.JIRA_URL;
let username = process.env.JIRA_USERNAME;
let password = process.env.JIRA_PASSWORD;

const search = function searchJIRA(key, callback) {
  cpjax(
    {
      url: `${jiraURL}/rest/api/2/search?jql=key="DEV-${key}"`,
      auth:
        "Basic " +
        new Buffer(username + ":" + password, "utf8").toString("base64")
    },
    function(err, data) {
      if (err) callback(err);
      let parsed = JSON.parse(data);
      let issue = {
        key: parsed.issues[0].key,
        summary: parsed.issues[0].fields.summary.trim(),
        status: parsed.issues[0].fields.status.name,
        combined:
          parsed.issues[0].key + " - " + parsed.issues[0].fields.summary.trim()
      };
      return callback(null, issue);
    }
  );
};

module.exports = { search };
