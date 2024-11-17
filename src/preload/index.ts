import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  closeWindow: (name: WindowNameType) => {
    ipcRenderer.send('closeWindow', name)
  },
  openWindow: (name: WindowNameType) => {
    ipcRenderer.send('openWindow', name)
  },
  shortCut: (type: ShortCutType, shortCut) => {
    return ipcRenderer.invoke('shortCut', type, shortCut)
  },
  setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => {
    ipcRenderer.send('setIgnoreMouseEvents', ignore, options)
  },
  // config window
  openConfigWindow: () => {
    ipcRenderer.send('openConfigWindow')
  },

  // sql
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sql: (sql: string, type: SqlActionType, params?: Record<string, any>) => {
    console.info('sql', sql, type, params)
    return ipcRenderer.invoke('sql', sql, type, params)
  },

  // store
  getConfig: () => {
    return ipcRenderer.invoke('getConfig')
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
