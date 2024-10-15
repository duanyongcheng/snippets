import { codeStore } from '@renderer/store/codeStore'
import { searchStore } from '@renderer/store/searchStore'
import { useEffect, useState } from 'react'

export default () => {
  const { data, setData } = codeStore()
  const { setSearch } = searchStore()
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
  /**
   * Selects an item from the data array, logs its content to the console,
   * copies the content to the clipboard, and hides the window.
   * @param index - The index of the item to select.
   */
  async function selectItem(index: number) {
    const content = data[index].content
    console.log(content)
    if (content) await navigator.clipboard.writeText(content)
    window.api.closeWindow('search')
    setData([])
    setSearch('')
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
