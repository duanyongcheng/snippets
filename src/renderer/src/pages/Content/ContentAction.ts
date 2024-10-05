export default async ({ request }) => {
  const data = await request.formData()
  const snippet: Snippets = {} as Snippets // Remove the unnecessary instantiation
  snippet.title = data.get('title')
  snippet.content = data.get('content')
  snippet.id = data.get('id')
  console.info('snippet', snippet)
  // update in sqlite
  window.api.sql(
    'UPDATE snippets SET title = @title, content = @content WHERE id = @id',
    'update',
    snippet
  )
  return ''
}
