export default async () => {
  const config = window.api.getConfig()
  if (config) {
    console.info('config', config)
    return config
  } else {
    return {}
  }
}
