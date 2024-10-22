export default async ({ request }) => {
  const formData = await request.formData()
  const action = formData.get('action')
  const data = JSON.parse(formData.get('data')) as ConfigContent
  console.info('action', action)
  // update in sqlite
  switch (action) {
    case 'shortCut':
      window.api.shortCut('showShortCut', data.shortCut)
      return await changeShortCut(data)
    case 'dbConfig':
      return {}
    // return await changeDbConfig(data)
    default:
      return { status: 400, message: 'action not found' }
  }
}

const changeShortCut = async (data: ConfigContent) => {
  const config = await window.api.sql<Config>('SELECT * from config WHERE id = 1', 'findOne')
  if (config) {
    console.info('config', config)
    // onlyChangeShortCut
    const content = JSON.parse(config.content)
    content.shortCut = data.shortCut
    console.info('content', content)
    await window.api.shortCut('showShortCut', content.shortCut)
  } else {
    await window.api.sql('INSERT INTO config (content) VALUES (@content)', 'insert', {
      content: JSON.stringify(data)
    })
    await window.api.shortCut('showShortCut', data.shortCut)
  }
  return {}
}
