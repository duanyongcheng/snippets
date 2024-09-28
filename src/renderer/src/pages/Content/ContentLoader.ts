export default async ({ params }) => {
  return window.api.sql<Snippets>(`SELECT * FROM snippets WHERE id = '${params.id}'`, 'findOne')
}
