import { join } from 'path'
import { WindowConfigOptions, createWindow } from './createWindow'
import { BrowserWindow, IpcMainEvent, IpcMainInvokeEvent, app, globalShortcut } from 'electron'

export const config = {
  search: {
    id: 0,
    options: {
      width: 600,
      height: 600,
      show: false,
      transparent: true,
      frame: false,
      autoHideMenuBar: true,
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false
      },
      hash: ''
    }
  },
  config: {
    id: 0,
    options: {
      width: 1250,
      height: 750,
      autoHideMenuBar: false,
      webPreferences: {
        preload: join(__dirname, '../preload/index.js'),
        sandbox: false
      },
      // hash: '/#config/category/contentList'
      hash: '/#/config/settings'
    }
  }
} as Record<WindowNameType, { id: number; options: WindowConfigOptions }>

export const getWindowByName = (name: WindowNameType) => {
  let win = BrowserWindow.fromId(config[name].id)
  if (!win) {
    win = createWindow(config[name].options)
    config[name].id = win.id
  }
  return win
}

export const getWindowByEvent = (event: IpcMainEvent | IpcMainInvokeEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}
export function registerSearchShortCut(win: BrowserWindow, searchCout: string) {
  return globalShortcut.register(searchCout, () => {
    win.isVisible() ? win.hide() : win.show()
  })
}

export function registerConfigShortCut(searchCout: string) {
  return globalShortcut.register(searchCout, () => {
    getWindowByName('config').show()
  })
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})

app.whenReady().then(() => {
  getWindowByName('config').show
})
