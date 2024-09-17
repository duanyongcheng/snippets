import { DataType } from '@renderer/assets/data'
import { useState } from 'react'
import { data as codes } from '@renderer/assets/data'

export default function Result(): JSX.Element {
  const [data] = useState<DataType[]>(codes)
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
