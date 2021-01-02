const jq = require('jquery')
const pop = require('popper.js')
const bootstrap = require('bootstrap')


const {
  app,
  BrowserWindow
} = require('electron')


function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })

  if (process.env.NODE_ENV !== 'dev') {
    win.removeMenu()
  }

  win.loadFile('index.html')

  if (process.env.NODE_ENV === 'dev') {
    win.webContents.openDevTools()
  }
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
