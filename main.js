const { app, BrowserWindow, ipcMain, shell, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const { exec, spawn } = require('child_process');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 1000,
    minHeight: 650,
    frame: false,
    backgroundColor: '#060708',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'assets', 'icon.png'),
    show: false
  });

  mainWindow.loadFile('src/index.html');
  mainWindow.once('ready-to-show', () => mainWindow.show());
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });

// Window controls
ipcMain.on('win-minimize', () => mainWindow.minimize());
ipcMain.on('win-maximize', () => { mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize(); });
ipcMain.on('win-close', () => mainWindow.close());

// Open external links
ipcMain.on('open-external', (e, url) => shell.openExternal(url));

// Open folder picker for install path
ipcMain.handle('pick-folder', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
    title: 'Choisir le dossier d\'installation'
  });
  return result.canceled ? null : result.filePaths[0];
});

// Check if executable exists
ipcMain.handle('check-game', (e, exePath) => {
  return fs.existsSync(exePath);
});

// Launch game executable
ipcMain.on('launch-game', (e, exePath) => {
  if (fs.existsSync(exePath)) {
    const gameDir = path.dirname(exePath);
    spawn(exePath, [], { cwd: gameDir, detached: true, stdio: 'ignore' }).unref();
  }
});

// Open folder
ipcMain.on('open-folder', (e, folderPath) => {
  if (fs.existsSync(folderPath)) shell.openPath(folderPath);
});

// Get app version
ipcMain.handle('get-version', () => app.getVersion());

// Store settings
const settingsPath = path.join(app.getPath('userData'), 'settings.json');
ipcMain.handle('get-settings', () => {
  try { return JSON.parse(fs.readFileSync(settingsPath, 'utf8')); }
  catch(e) { return {}; }
});
ipcMain.on('save-settings', (e, data) => {
  fs.writeFileSync(settingsPath, JSON.stringify(data, null, 2));
});
