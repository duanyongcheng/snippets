import { BrowserWindow, BrowserWindowConstructorOptions, shell } from 'electron'
import { join } from 'path'
import { is } from '@electron-toolkit/utils'
import url from 'node:url'

export interface WindowConfigOptions extends Partial<BrowserWindowConstructorOptions> {
  openDevTools?: boolean
  hash?: string
  icon?: string
}

export function createWindow(options: WindowConfigOptions): BrowserWindow {
  const defaultIconPath = join(__dirname, '../resources/icon.png')

  const windowOptions: BrowserWindowConstructorOptions = {
    ...options,
    icon: options.icon || defaultIconPath
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

  // 移除 closed 事件监听器，因为我们将在主文件中处理它

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
