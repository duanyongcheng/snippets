import { errorStore } from '@renderer/store/errorStore'

export default () => {
  const setError = errorStore((s) => s.setError)

  const registerShortCut = async (type: string, shortCut: string) => {
    const isBind = await window.api.shortCut(type, shortCut)
    if (!isBind) {
      setError('快捷键绑定失败')
    } else {
      setError('')
    }
  }
  return { registerShortCut }
}
