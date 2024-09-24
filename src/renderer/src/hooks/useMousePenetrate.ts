import { MutableRefObject } from 'react'

export default () => {
  const setIgnoreMouseEvents = (ignore: boolean, options?: { forward: boolean }) => {
    window.api.setIgnoreMouseEvents(ignore, options)
  }
  const registerMouseEvent = <T extends HTMLElement>(el: MutableRefObject<T>) => {
    el.current?.addEventListener('mouseover', () => {
      setIgnoreMouseEvents(false)
    })
    document.body?.addEventListener('mouseout', (e: MouseEvent) => {
      if (e.target === document.body) {
        console.info(e.target)
        setIgnoreMouseEvents(true, { forward: true })
      }
    })
  }
  return { registerMouseEvent }
}
