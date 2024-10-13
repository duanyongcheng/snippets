import { BrowserWindow, shell } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import icon from '../../../resources/icon.png?asset'
import url from 'node:url'

export function createWindow(): BrowserWindow {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1250,
    height: 750,
    // show: false,
    // transparent: false,
    // frame: true,
    // alwaysOnTop: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    // mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#/config/category/contentList')
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#/config')
  } else {
    mainWindow.loadURL(
      url.format({
        //编译后的文件
        pathname: join(__dirname, '../renderer/index.html'),
        //协议
        protocol: 'file',
        //protocol 后面需要两个/
        slashes: true,
        //hash 的值
        hash: 'config/category/contentList'
      })
    )
  }
  return mainWindow
}
