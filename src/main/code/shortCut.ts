import { BrowserWindow, IpcMainInvokeEvent, ipcMain } from 'electron'
const { app, globalShortcut } = require('electron')
interface Config {
  search: string
}

export function registerShortCut(win: BrowserWindow) {
  ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, data: Config) => {
    return registerSearchShortCut(win, data.search)
  })
}

function registerSearchShortCut(win: BrowserWindow, searchCout: string) {
  return globalShortcut.register(searchCout, () => {
    win.isVisible() ? win.hide() : win.show()
  })
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
