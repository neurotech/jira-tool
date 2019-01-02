const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("path");
const url = require("url");

let window = null;

app.once("ready", () => {
  window = new BrowserWindow({
    width: 520,
    height: 235,
    show: false,
    frame: false,
    resizable: false,
    backgroundColor: "#ffffff"
  });

  window.loadURL(path.join(__dirname, "build/index.html"));

  globalShortcut.register("Control+Shift+Space", () => {
    window.show();
  });

  window.once("ready-to-show", () => {
    window.show();
  });

  window.on("close", event => {
    event.preventDefault();
    window.hide();
  });
});

app.on("window-all-closed", event => {
  event.preventDefault();
});
