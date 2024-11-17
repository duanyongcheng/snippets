import path from 'path'

let store: any = null

export const initStore = async () => {
  if (store) return store
  const { default: Store } = await import('electron-store')
  store = new Store<ConfigContent>({
    name: 'config',
    cwd: path.join(process.env.HOME || process.env.USERPROFILE || '', '.config/snippets')
  })
  return store
}

export const getStore = () => {
  if (!store) {
    throw new Error('Store not initialized')
  }
  return store
}

export const setConfig = (config: ConfigContent) => {
  const store = getStore()
  store.set('config', config)
}

export const getConfig = () => {
  const store = getStore()
  return store.get('config')
}
