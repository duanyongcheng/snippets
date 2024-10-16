export default async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  console.info(data)
  // update in sqlite
  const config = await window.api.sql('SELECT * from config WHERE id = 1', 'find')
  if (config) {
    return await window.api.sql('UPDATE config SET content = @content WHERE id = 1', 'update', {
      content: JSON.stringify(data)
    })
  } else {
    return await window.api.sql('INSERT INTO config (content) VALUES (@content)', 'insert', {
      content: JSON.stringify(data)
    })
  }
}
