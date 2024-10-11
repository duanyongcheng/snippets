export default async ({ params }) => {
  const sql = `SELECT * FROM snippets WHERE id = '${params.id}'`
  const snippet = await window.api.sql<Snippets>(sql, 'findOne')
  const categories = await window.api.sql<Category[]>('SELECT * FROM categories', 'find')
  return {
    snippet,
    categories
  }
}
