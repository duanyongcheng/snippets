export default () => {
  const find = (sql: string): Promise<Snippets[]> => {
    return window.api.sql(sql, 'find')
  }

  const findOne = (sql: string) => {
    return window.api.sql(sql, 'findOne')
  }

  const insert = (sql: string) => {
    return window.api.sql(sql, 'insert')
  }

  const update = (sql: string) => {
    return window.api.sql(sql, 'update')
  }

  const remove = (sql: string) => {
    return window.api.sql(sql, 'remove')
  }
  return { find, findOne, insert, update, remove }
}
