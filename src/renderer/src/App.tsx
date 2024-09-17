import Search from './components/Search'
import Result from './components/Result' // Import the Result component
import { CodeContext } from './context/CodeContext'
import { useState } from 'react'
import { DataType, codes } from './data'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const [data, setData] = useState<DataType[]>(codes) // Change 'setDate' to 'setData'
  return (
    <CodeContext.Provider value={{ data, setData }}>
      <Search></Search>
      <Result></Result>
    </CodeContext.Provider>
  )
}

export default App
