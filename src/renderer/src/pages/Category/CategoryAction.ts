import { redirect } from 'react-router-dom'

export default async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  switch (data.action) {
    case 'ADD': {
      window.api.sql(
        "INSERT INTO categories (name, created_at) VALUES ('未知分类', datetime())",
        'insert'
      )
      return {}
    }
    case 'DELETE': {
      window.api.sql('DELETE FROM categories WHERE id = @id', 'remove', { id: data.id })
      window.api.sql('UPDATE snippets SET category_id = 0 WHERE category_id = @id', 'update', {
        id: data.id
      })
      return redirect('/config/catygory/contentList/0')
    }
    case 'UPDATE': {
      window.api.sql('UPDATE categories SET name = @name WHERE id = @id', 'update', {
        name: data.name,
        id: data.id
      })
      const url = `/config/category/contentList/${data.id}`
      console.log(url)
      return redirect(url)
    }
  }
  return {}
}
