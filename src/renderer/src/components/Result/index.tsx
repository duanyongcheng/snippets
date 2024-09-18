import useCode from '@renderer/hooks/useCode'
import { useEffect, useState } from 'react'
import './style.scss'
import classNames from 'classnames'

export default function Result(): JSX.Element {
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
        console.log(data[currentIndex].content)
        navigator.clipboard.writeText(data[currentIndex].content)
        break
      default:
        if (e.code.startsWith('Key')) {
          console.log(e.code)
          setCurrentIndex(0)
        }
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handelKeyListener)
    return (): void => {
      document.removeEventListener('keydown', handelKeyListener)
    }
  }, [data, currentIndex])
  return (
    <main className="main">
      {currentIndex}
      {data.map((item, index) => (
        <div key={index} className={classNames(['item', { active: currentIndex === index }])}>
          {item.content}
        </div>
      ))}
    </main>
  )
}
