import { BrowserWindow, IpcMainEvent, ipcMain } from 'electron'

ipcMain.on('hideWindow', (event: IpcMainEvent) => {
  const window = BrowserWindow.fromWebContents(event.sender)
  window?.hide()
})
