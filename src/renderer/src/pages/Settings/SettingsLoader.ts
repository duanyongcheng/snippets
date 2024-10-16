export default async () => {
  const config = await window.api.sql<Config>('SELECT * FROM config WHERE id = 1', 'findOne')
  if (config) {
    console.info('config', config)
    return JSON.parse(config.content)
  } else {
    return {}
  }
}
