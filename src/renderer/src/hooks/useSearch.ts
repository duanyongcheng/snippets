import { ChangeEvent } from 'react'
import { codes } from '@renderer/data'
import { codeStore } from '@renderer/store/codeStore'
import { searchStore } from '@renderer/store/searchStore'

export default () => {
  const { setData } = codeStore()
  const { search, setSearch } = searchStore()
  const handelSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value)
    if (e.target.value === undefined || e.target.value === '') setData([])
    const searchData = codes.filter((code) =>
      code.content.toLowerCase().includes(e.target.value.toLowerCase())
    )
    if (searchData !== undefined) setData(searchData)
  }
  return { search, handelSearch }
}
