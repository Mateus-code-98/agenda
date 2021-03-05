console.log('TOAQui')
const { BrowserWindow, app, ipcMain } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.ts'),
    }
  })

  win.loadURL("http://localhost:3000")
  // win.loadFile('build/index.html')
}

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.reply('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong'
})


app.whenReady().then(createWindow)