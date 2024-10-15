import { BrowserWindow, BrowserWindowConstructorOptions, shell } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import url from 'node:url'

export interface WindowConfigOptions extends Partial<BrowserWindowConstructorOptions> {
  openDevTools?: boolean
  hash?: string
}

export function createWindow(options: WindowConfigOptions): BrowserWindow {
  const win = new BrowserWindow(Object.assign(options))

  if (is.dev && options.openDevTools) win.webContents.openDevTools()
  win.on('ready-to-show', () => {
    win.show()
  })

  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    // mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'] + '/#/config/category/contentList')
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + options.hash)
  } else {
    win.loadURL(
      url.format({
        //编译后的文件
        pathname: join(__dirname, '../renderer/index.html'),
        //协议
        protocol: 'file',
        //protocol 后面需要两个/
        slashes: true,
        //hash 的值
        hash: options.hash
      })
    )
  }
  return win
}
