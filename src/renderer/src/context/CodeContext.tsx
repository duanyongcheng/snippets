import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'
import { DataType } from '@renderer/data'

export interface ContextProps {
  data: DataType[]
  setData: Dispatch<SetStateAction<DataType[]>>
}

export const CodeContext = createContext<ContextProps | undefined>(undefined)

interface Props {
  children: ReactNode
}

export const CodeProvider = ({ children }: Props) => {
  const [data, setData] = useState<DataType[]>([])
  return <CodeContext.Provider value={{ data, setData }}>{children}</CodeContext.Provider>
}
