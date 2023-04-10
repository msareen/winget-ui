const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    if (process.platform === 'darwin') {
        console.log('This app will not work on MacOs')
        app.quit();
    }

    createWindow()
  })