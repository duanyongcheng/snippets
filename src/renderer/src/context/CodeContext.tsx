import { Dispatch, SetStateAction, createContext } from 'react'
import { DataType } from '@renderer/data'

export interface ContextProps {
  data: DataType[]
  setData: Dispatch<SetStateAction<DataType[]>>
}

export const CodeContext = createContext<ContextProps | undefined>(undefined)
