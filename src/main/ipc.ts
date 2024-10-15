import { IpcMainEvent, IpcMainInvokeEvent, globalShortcut, ipcMain } from 'electron'
import {
  getWindowByName,
  getWindowByEvent,
  registerSearchShortCut,
  registerConfigShortCut
} from './windows'
ipcMain.on('openWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getWindowByName(name).show()
})

ipcMain.on('closeWindow', (_event: IpcMainEvent, name: WindowNameType) => {
  getWindowByName(name).hide()
})

ipcMain.on(
  'setIgnoreMouseEvents',
  (event: IpcMainEvent, ignore: boolean, options?: { forward: boolean }) => {
    getWindowByEvent(event).setIgnoreMouseEvents(ignore, options)
  }
)

const shortCutConfig = {
  search: '',
  config: ''
}

ipcMain.handle(
  'shortCut',
  (event: IpcMainInvokeEvent, type: string = 'search|config', shortCut: string) => {
    switch (type) {
      case 'search':
        if (shortCutConfig.search) {
          globalShortcut.unregister(shortCutConfig.search)
        }
        shortCutConfig.search = shortCut
        return registerSearchShortCut(getWindowByEvent(event), shortCut)
      case 'config':
        if (shortCutConfig.config) {
          globalShortcut.unregister(shortCutConfig.config)
        }
        shortCutConfig.config = shortCut
        return registerConfigShortCut(shortCut)
      default:
        return false
    }
  }
)
