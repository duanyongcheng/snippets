export default () => {
  const findAll = (): Promise<Category[]> => {
    return window.api.sql('SELECT * FROM category', 'find')
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
  return { findAll, findOne, insert, update, remove }
}
