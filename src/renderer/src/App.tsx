import Search from './components/Search'
import Result from './components/Result' // Import the Result component
import useShortCut from './hooks/useShortCut'
import ShortCutError from './components/ShortCutError'
import { errorStore } from './store/errorStore'

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  const { registerShortCut } = useShortCut()
  registerShortCut({ search: 'CommandOrControl+Shift+;' })
  return (
    <main className="relative">
      <ShortCutError></ShortCutError>
      <Search></Search>
      <Result></Result>
    </main>
  )
}

export default App
