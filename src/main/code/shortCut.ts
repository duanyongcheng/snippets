import { BrowserWindow, IpcMainEvent, dialog, ipcMain } from 'electron'
const { app, globalShortcut } = require('electron')
interface Config {
  search: string
}
const config = {
  search: ''
}

export function registerShortCut(win: BrowserWindow) {
  ipcMain.on('shortCut', (_event: IpcMainEvent, data: Config) => {
    if (config.search) globalShortcut.unregister(config.search)
    config.search = data.search
    registerSearchShortCut(win, config.search)
  })
}

function registerSearchShortCut(win: BrowserWindow, searchCout: string) {
  const ret = globalShortcut.register(searchCout, () => {
    win.isVisible() ? win.hide() : win.show()
  })
  if (!ret) {
    console.log('registration failed')
    dialog.showErrorBox('Error', '快捷键冲突')
  }
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
