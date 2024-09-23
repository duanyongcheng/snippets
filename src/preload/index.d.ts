import { ElectronAPI } from '@electron-toolkit/preload'
export interface CutConfig {
  search: string
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      hideWindow: () => void
      shortCut: (cutConfig: CutConfig) => Promise<boolean>
    }
  }
}
