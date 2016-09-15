var app = require('electron').app;
var BrowserWindow = require('electron').BrowserWindow;
// require('electron').CrashReporter.start();
var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + __dirname + '/public/index.html');
  mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});

const ipc = require('electron').ipcMain;

ipc.on('close-main-window', function() {
  if (process.platform != 'darwin')
    app.quit();
  else
    mainWindow.minimize();
});
