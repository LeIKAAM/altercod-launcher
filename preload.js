const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  minimize:      ()        => ipcRenderer.send('win-minimize'),
  maximize:      ()        => ipcRenderer.send('win-maximize'),
  close:         ()        => ipcRenderer.send('win-close'),
  openExternal:  (url)     => ipcRenderer.send('open-external', url),
  pickFolder:    ()        => ipcRenderer.invoke('pick-folder'),
  checkGame:     (path)    => ipcRenderer.invoke('check-game', path),
  launchGame:    (path)    => ipcRenderer.send('launch-game', path),
  openFolder:    (path)    => ipcRenderer.send('open-folder', path),
  getVersion:    ()        => ipcRenderer.invoke('get-version'),
  getSettings:   ()        => ipcRenderer.invoke('get-settings'),
  saveSettings:  (data)    => ipcRenderer.send('save-settings', data),
});
