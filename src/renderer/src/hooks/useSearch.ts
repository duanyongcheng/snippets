import { ChangeEvent, useState } from 'react'
import useCode from './useCode'
import { codes } from '@renderer/data'

export default (): {
  search: string
  handelSearch: (e: ChangeEvent<HTMLInputElement>) => void
} => {
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
  return { search, handelSearch }
}
