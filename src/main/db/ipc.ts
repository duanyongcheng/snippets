import { IpcMainInvokeEvent, ipcMain } from 'electron'
import * as query from './query'

ipcMain.handle(
  'sql',
  (_event: IpcMainInvokeEvent, sql: string, type: SqlActionType, params = {}) => {
    console.log('main sql {}', sql, params)
    return query[type](sql, params)
  }
)
