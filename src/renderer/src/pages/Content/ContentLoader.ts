export default async ({ params }) => {
  const sql = `SELECT * FROM snippets WHERE id = '${params.id}'`
  console.log('snippets sql', sql)
  return window.api.sql<Snippets>(sql, 'findOne')
}
