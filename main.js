const { app, BrowserWindow } = require('electron')
const isDev = require("electron-is-dev");

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadURL(
      isDev
        ? "http://localhost:3000"
        : `file://${path.join(__dirname, "../build/index.html")}`
    );
  
    // Open the DevTools.
    if (isDev) {
      win.webContents.openDevTools({ mode: "detach" });
    }
  }

  app.whenReady().then(() => {
    if (process.platform === 'darwin') {
        console.log('This app will not work on MacOs')
        app.quit();
    }
    createWindow()
  })