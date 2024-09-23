import { errorStore } from '@renderer/store/errorStore'

interface CutConfig {
  search: string
}

export default () => {
  const setError = errorStore((s) => s.setError)

  const registerShortCut = async (cutConfig: CutConfig) => {
    const isBind = await window.api.shortCut(cutConfig)
    if (!isBind) {
      setError('快捷键绑定失败')
    } else {
      setError('')
    }
  }
  return { registerShortCut }
}
