import { IpcMainEvent, IpcMainInvokeEvent, ipcMain } from 'electron'
import { getWindowByName, getWindowByEvent, registerShortCut } from './windows'
import { getConfig } from './store'
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

ipcMain.handle('getConfig', () => {
  return getConfig()
})

ipcMain.handle('shortCut', (_event: IpcMainInvokeEvent, type: ShortCutType, shortCut: string) => {
  console.log(`Received shortCut request: type=${type}, shortCut=${shortCut}`)
  let result: boolean
  switch (type) {
    case 'showShortCut':
      result = registerShortCut('search', shortCut)
      break
    case 'configPage':
      result = registerShortCut('config', shortCut)
      break
    default:
      result = false
  }
  console.log(`Shortcut registration result: ${result}`)
  return result
})
