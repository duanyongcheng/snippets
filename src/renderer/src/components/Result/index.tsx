import useCode from '@renderer/hooks/useCode'
import { useEffect } from 'react'

export default function Result(): JSX.Element {
  const { data } = useCode()
  const handelKeyDown = (e: KeyboardEvent): void => {
    console.info(e.key)
    console.log(data.length)
  }
  useEffect(() => {
    document.addEventListener('keydown', handelKeyDown)
    return (): void => {
      document.removeEventListener('keydown', handelKeyDown)
    }
  }, [data])
  return (
    <main className="bg-slate-50 px-3 -mt-[7px] pb-1">
      {data.map((item, index) => (
        <div key={index} className="text-slate-700 truncate mb-2">
          {item.content}
        </div>
      ))}
    </main>
  )
}
