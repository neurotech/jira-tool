const fs = require("fs");
const browserify = require("browserify");
const envify = require("envify");

let buildDir = "./build";

// Make build dir
if (!fs.existsSync(buildDir)) fs.mkdirSync(buildDir);

// HTML
fs.writeFileSync(
  "./build/index.html",
  fs.readFileSync("./src/index.html"),
  "utf8"
);

// CSS
fs.writeFileSync(
  "./build/index.css",
  fs.readFileSync("./src/index.css"),
  "utf8"
);

// JS
let bundler = browserify(__dirname + "/src/index.js");
bundler.transform(envify);
if (process.env.NODE_ENV === "production")
  bundler.transform("uglifyify", { global: true });
bundler.bundle().pipe(fs.createWriteStream(__dirname + "/build/index.js"));

// Log
console.log("Build complete.");
