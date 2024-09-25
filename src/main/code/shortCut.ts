import { BrowserWindow, IpcMainInvokeEvent, ipcMain } from 'electron'
import { createConfigWindow } from '../config'
const { app, globalShortcut } = require('electron')

const config = {
  search: '',
  config: ''
}

export function registerShortCut(win: BrowserWindow) {
  ipcMain.handle(
    'shortCut',
    (_event: IpcMainInvokeEvent, type: string = 'search|config', shortCut: string) => {
      switch (type) {
        case 'search':
          if (config.search) {
            globalShortcut.unregister(config.search)
          }
          config.search = shortCut
          return registerSearchShortCut(win, shortCut)
        case 'config':
          if (config.config) {
            globalShortcut.unregister(config.config)
          }
          config.config = shortCut
          return registerConfigShortCut(shortCut)
        default:
          return false
      }
    }
  )
}

function registerSearchShortCut(win: BrowserWindow, searchCout: string) {
  return globalShortcut.register(searchCout, () => {
    win.isVisible() ? win.hide() : win.show()
  })
}

function registerConfigShortCut(searchCout: string) {
  return globalShortcut.register(searchCout, () => {
    createConfigWindow()
  })
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
