import Search from './components/Search'
import Result from './components/Result' // Import the Result component
import { CodeProvider } from './context/CodeContext'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  return (
    <CodeProvider>
      <Search></Search>
      <Result></Result>
    </CodeProvider>
  )
}

export default App
