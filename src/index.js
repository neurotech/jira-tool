const tiny = require("tiny-json-http");

tiny.get({ url: "http://httpbin.org/get" }, function(err, res) {
  if (err) return console.error(err);
  console.log(res.body);
});
