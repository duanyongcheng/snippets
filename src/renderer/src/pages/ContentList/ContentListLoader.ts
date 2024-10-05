export default async ({ params }) => {
  const cid = params.cid
  console.log('cid', cid)
  let sql = 'SELECT * FROM snippets'
  if (cid) {
    sql += ` WHERE category_id = ${cid}`
  }
  sql += ' ORDER BY id DESC'
  return window.api.sql(sql, 'find')
}
