import { IpcMainEvent, IpcMainInvokeEvent, ipcMain } from 'electron'
import { getWindowByName, getWindowByEvent, registerShortCut } from './windows'
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
ipcMain.handle('shortCut', (event: IpcMainInvokeEvent, type: ShortCutType, shortCut: string) => {
  switch (type) {
    case 'showShortCut':
      return registerShortCut(getWindowByName('search'), shortCut)
    case 'configPage':
      return registerShortCut(getWindowByName('config'), shortCut)
    default:
      return false
  }
})
