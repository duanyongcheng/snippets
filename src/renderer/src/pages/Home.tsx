import Search from '@renderer/components/Search'
import Result from '@renderer/components/Result' // Import the Result component
import useShortCut from '@renderer/hooks/useShortCut'
import ShortCutError from '@renderer/components/ShortCutError'
import { MutableRefObject, useEffect, useRef } from 'react'
import useMousePenetrate from '@renderer/hooks/useMousePenetrate'

function Home(): JSX.Element {
  const { registerShortCut } = useShortCut()
  registerShortCut('search', 'CommandOrControl+Shift+;')
  // registerShortCut('config', 'CommandOrControl+,')
  const mainRef = useRef<HTMLMapElement>(null) // Declare and initialize the "mainRef" variable
  const { registerMouseEvent } = useMousePenetrate()
  useEffect(() => {
    registerMouseEvent(mainRef as MutableRefObject<HTMLElement>)
  }, [])
  return (
    <main className="relative p-0.5" ref={mainRef}>
      <ShortCutError></ShortCutError>
      <Search></Search>
      <Result></Result>
    </main>
  )
}

export default Home
