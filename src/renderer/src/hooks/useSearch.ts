import { ChangeEvent } from 'react'
import { codeStore } from '@renderer/store/codeStore'
import { searchStore } from '@renderer/store/searchStore'
import useQuery from './useQuerySnippets'

export default () => {
  const { setData } = codeStore()
  const { search, setSearch } = searchStore()
  const { find } = useQuery()
  const handelSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
    if (e.target.value === undefined || e.target.value === '') setData([])
    const searchKey = e.target.value
    const sql = `SELECT * FROM snippets WHERE title LIKE '%${searchKey}%'`
    console.log(sql)
    find(sql).then((data: Snippets[]) => {
      console.log(data)
      if (data !== undefined) setData(data as Snippets[])
    })
  }
  return { search, handelSearch }
}
