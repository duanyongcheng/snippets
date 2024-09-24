import { SettingOne } from '@icon-park/react'
import useSearch from '@renderer/hooks/useSearch'
import { Input } from 'antd'

export default function Search(): JSX.Element {
  const { search, handelSearch } = useSearch()
  return (
    <main className="bg-slate-50 p-4 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg drag flex items-center">
        <SettingOne
          theme="outline"
          size="20"
          fill="#333"
          className="nodrag"
          onClick={() => {
            alert('Setting')
          }}
        />
        <Input
          value={search}
          onChange={handelSearch}
          autoFocus
          // className="w-full outline-none text-2xl text-slate-600 bg-slate-200"
        ></Input>
      </section>
      <section className="text-slate-600 text-center text-xs mt-2">dyc-test-snippets</section>
    </main>
  )
}
