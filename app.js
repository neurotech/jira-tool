const { app, BrowserWindow, globalShortcut, Tray, Menu } = require("electron");
const path = require("path");

let window = null;
let tray = null;

app.on("ready", () => {
  window = new BrowserWindow({
    width: 520,
    height: 235,
    show: false,
    frame: false,
    resizable: false,
    backgroundColor: "#ffffff"
  });

  tray = new Tray(path.join(__dirname, "./icons/tray.ico"));
  var contextMenu = Menu.buildFromTemplate([
    {
      label: "Show App",
      click: function() {
        window.show();
      }
    },
    {
      label: "Quit",
      click: function() {
        app.quit();
      }
    }
  ]);
  tray.setContextMenu(contextMenu);

  window.loadURL(path.join(__dirname, "build/index.html"));

  globalShortcut.register("Control+Shift+Space", () => {
    window.show();
  });

  window.once("ready-to-show", () => {
    window.show();
  });
});
