export default async ({ params }) => {
  const cid = params.cid
  return window.api.sql(`SELECT * FROM snippets WHERE category_id = '${cid}'`, 'find')
}
