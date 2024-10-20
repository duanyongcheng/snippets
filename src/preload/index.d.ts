import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      openWindow: (name: WindowNameType) => void
      closeWindow: (name: WindowNameType) => void
      shortCut: (type: ShortCutType, searchCout: string) => Promise<boolean>
      setIgnoreMouseEvents: (ignore: boolean, options?: { forward: boolean }) => void
      openConfigWindow: () => void
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      sql: <T>(sql: string, type: SqlActionType, params?: Record<string, any>) => Promise<T>
    }
  }
}
