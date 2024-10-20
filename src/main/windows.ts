import { join } from 'path'
import { WindowConfigOptions, createWindow } from './createWindow'
import { BrowserWindow, IpcMainEvent, IpcMainInvokeEvent, app, globalShortcut } from 'electron'
import { findConfig } from './db/query'

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
      openDevTools: true,
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
export function registerShortCut(win: BrowserWindow, searchCout: string) {
  const config: ConfigContent = findConfig()
  if (config!.shortCut !== searchCout) {
    globalShortcut.unregister(config!.shortCut)
  }
  if (globalShortcut.isRegistered(searchCout)) {
    return false
  }
  return globalShortcut.register(searchCout, () => {
    win.isVisible() ? win.hide() : win.show()
  })
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})

app.whenReady().then(() => {
  getWindowByName('config').show
  getWindowByName('search').show
  const config = findConfig()
  // console.info(config)
  registerShortCut(getWindowByName('search'), config.shortCut)
})
