import Search from './components/Search'
import Result from './components/Result' // Import the Result component

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')
  window.api.shortCut({
    search: 'CommandOrControl+Shift+;'
  })
  return (
    <>
      <Search></Search>
      <Result></Result>
    </>
  )
}

export default App
