import { redirect } from 'react-router-dom'

export default async ({ request }) => {
  const data = await request.formData()
  const snippet: Snippets = Object.fromEntries(data) as Snippets // Remove the unnecessary instantiation
  console.log('UPDATE snippet', snippet)
  // update in sqlite
  window.api.sql(
    'UPDATE snippets SET title = @title, content = @content, category_id = @category_id WHERE id = @id',
    'update',
    snippet
  )
  return redirect(`/config/category/contentList/${snippet.category_id}/content/${snippet.id}`)
}
