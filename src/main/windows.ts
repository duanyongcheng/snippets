import { join } from 'path'
import { WindowConfigOptions, createWindow } from './createWindow'
import { BrowserWindow, IpcMainEvent, IpcMainInvokeEvent, app, globalShortcut } from 'electron'
import { update } from './db/query'
import { getConfig, initStore, setConfig } from './store'

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
      hash: '/#config/category/contentList'
      // hash: '/#config'
    }
  }
} as Record<WindowNameType, { id: number; options: WindowConfigOptions }>

export const getWindowByName = (name: WindowNameType) => {
  let win = BrowserWindow.fromId(config[name].id)
  console.log('win', win)
  if (!win || win.isDestroyed()) {
    win = createWindow(config[name].options)
    config[name].id = win.id
    // 添加 closed 事件监听器
    win.on('closed', () => {
      config[name].id = 0 // 重置 ID，表示窗口已关闭
    })
  }
  return win
}

export const getWindowByEvent = (event: IpcMainEvent | IpcMainInvokeEvent) => {
  return BrowserWindow.fromWebContents(event.sender)!
}
export function registerShortCut(winName: WindowNameType, searchCout: string) {
  const config: ConfigContent = getConfig()
  console.info('config', config)
  console.info('searchCout', searchCout)
  if (config!.shortCut !== searchCout) {
    globalShortcut.unregister(config!.shortCut)
  }
  if (globalShortcut.isRegistered(searchCout)) {
    return false
  }
  config.shortCut = searchCout
  // 注册新的快捷键
  const success = globalShortcut.register(searchCout, () => {
    const win = getWindowByName(winName)
    if (win && !win.isDestroyed()) {
      if (win.isVisible()) {
        win.hide()
      } else {
        win.show()
        win.focus() // 确保窗口获得焦点
      }
    } else {
      // 如果窗口不存在或已销毁，创建新窗口
      const newWin = getWindowByName(winName)
      if (newWin) {
        newWin.show()
        newWin.focus()
      }
    }
  })
  if (success) {
    console.info('config', JSON.stringify(config))
    setConfig(config)
  }
  return success
}

app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})

app.whenReady().then(async () => {
  getWindowByName('search')
  await initStore()
  const config = getConfig()
  if (config?.shortCut) {
    registerShortCut('search', config.shortCut)
  } else {
    registerShortCut('search', 'CommandOrControl+Shift+;')
    setConfig({ shortCut: 'CommandOrControl+Shift+;', dbConfig: '~/.config/snippets' })
  }
})
