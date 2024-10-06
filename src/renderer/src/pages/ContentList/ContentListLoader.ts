export default async ({ params, request }) => {
  const cid = params.cid
  const url = new URL(request.url)
  const searchKey = url.searchParams.get('searchKey')
  console.log('cid', cid)
  let sql = 'SELECT * FROM snippets'
  if (searchKey) {
    sql += ` WHERE title LIKE @searchKey or content LIKE @searchKey`
    return window.api.sql(sql, 'find', { searchKey: `%${searchKey}%` })
  }
  if (cid) {
    sql += ` WHERE category_id = ${cid}`
  }
  sql += ' ORDER BY id DESC'
  return window.api.sql(sql, 'find')
}
