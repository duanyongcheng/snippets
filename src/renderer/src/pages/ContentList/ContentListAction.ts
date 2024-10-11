import { redirect } from 'react-router-dom'

export default async ({ params, request }) => {
  const cid = params.cid || 0
  const formData = await request.formData()
  switch (formData.get('action')) {
    case 'add': {
      const id = await window.api.sql(
        `INSERT INTO snippets (category_id, title, content, created_at) VALUES (${cid}, '未知的片段','', datetime())`,
        'insert'
      )
      return redirect(`content/${id}`)
    }
    case 'delete': {
      const id = formData.get('id')
      window.api.sql('DELETE FROM snippets WHERE id = @id', 'remove', { id })
    }
  }
  return {}
}
