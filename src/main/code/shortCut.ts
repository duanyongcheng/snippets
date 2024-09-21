import { BrowserWindow, dialog } from 'electron'

const { app, globalShortcut } = require('electron')

export function registerShortCut(win: BrowserWindow) {
  app.whenReady().then(() => {
    // 注册一个'CommandOrControl+X' 快捷键监听器
    const ret = globalShortcut.register('CommandOrControl+Shift+;', () => {
      win.show()
    })

    if (!ret) {
      console.log('registration failed')
      dialog.showErrorBox('Error', '快捷键冲突')
    }

    // 检查快捷键是否注册成功
    console.log(globalShortcut.isRegistered('CommandOrControl+X'))
  })

  app.on('will-quit', () => {
    // 注销所有快捷键
    globalShortcut.unregisterAll()
  })
}
