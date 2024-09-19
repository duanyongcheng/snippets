import { useEffect, useState } from 'react'
import useCode from './useCode'

export default () => {
  const { data } = useCode()
  const [currentIndex, setCurrentIndex] = useState(0)
  const handelKeyListener = (e: KeyboardEvent): void => {
    console.info(e.key)
    console.log(data.length)
    // 在data.length循环
    switch (e.code) {
      case 'ArrowDown':
        if (currentIndex < data.length - 1) {
          setCurrentIndex(currentIndex + 1)
        } else {
          setCurrentIndex(0)
        }
        break
      case 'ArrowUp':
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
        } else {
          setCurrentIndex(Math.max(data.length - 1, 0))
        }
        break
      case 'Enter':
        selectItem(currentIndex)
        break
    }
  }
  const selectItem = (index: number) => {
    console.log(data[index].content)
    navigator.clipboard.writeText(data[index].content)
    window.api.hideWindow()
  }

  useEffect(() => {
    document.addEventListener('keydown', handelKeyListener)
    return (): void => {
      document.removeEventListener('keydown', handelKeyListener)
    }
  }, [data, currentIndex])

  useEffect(() => setCurrentIndex(0), [data])

  return { data, currentIndex, selectItem }
}
