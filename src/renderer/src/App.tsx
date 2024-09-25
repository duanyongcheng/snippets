import Search from './components/Search'
import Result from './components/Result' // Import the Result component
import useShortCut from './hooks/useShortCut'
import ShortCutError from './components/ShortCutError'
import { MutableRefObject, useEffect, useRef } from 'react'
import useMousePenetrate from './hooks/useMousePenetrate'

function App(): JSX.Element {
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

export default App
