import { BrowserWindow, BrowserWindowConstructorOptions, shell } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import url from 'node:url'

export interface WindowConfigOptions extends Partial<BrowserWindowConstructorOptions> {
  openDevTools?: boolean
  hash?: string
  icon?: string // 添加 icon 属性
}

export function createWindow(options: WindowConfigOptions): BrowserWindow {
  // 设置默认图标路径
  const defaultIconPath = join(__dirname, '../resources/icon.png') // 请确保这个路径是正确的

  const windowOptions: BrowserWindowConstructorOptions = {
    ...options,
    icon: options.icon || defaultIconPath // 使用提供的图标或默认图标
  }

  const win = new BrowserWindow(windowOptions)

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
    win.loadURL(process.env['ELECTRON_RENDERER_URL'] + options.hash)
  } else {
    win.loadURL(
      url.format({
        pathname: join(__dirname, '../renderer/index.html'),
        protocol: 'file',
        slashes: true,
        hash: options.hash?.substring(1)
      })
    )
  }
  return win
}
