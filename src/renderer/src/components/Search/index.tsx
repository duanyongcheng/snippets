import { codes } from '@renderer/data'
import useCode from '@renderer/hooks/useCode'
import { ChangeEvent, useState } from 'react'

export default function Search(): JSX.Element {
  const { setData } = useCode()
  const [search, setSearch] = useState('')
  const handelSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
    if (e.target.value === undefined || e.target.value === '') setData([])
    const searchData = codes.filter((code) =>
      code.content.toLowerCase().includes(e.target.value.toLowerCase())
    )
    if (searchData !== undefined) setData(searchData)
  }
  return (
    <main className="bg-slate-50 p-2 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg drag">
        <input
          value={search}
          onChange={handelSearch}
          className="w-full outline-none text-2xl text-slate-600 bg-slate-200 drag"
        ></input>
      </section>
      <section className="text-slate-600 text-center text-xs mt-2">dyc-test-snippets</section>
    </main>
  )
}
