import { db } from './connects'

const find = (sql: string, params = {}) => {
  return db.prepare(sql).all(params)
}

const findOne = (sql: string) => {
  return db.prepare(sql).get()
}

const insert = (sql: string, params = {}) => {
  return db.prepare(sql).run(params).lastInsertRowid
}

const update = (sql: string, params: Record<string, string | number>) => {
  return db.prepare(sql).run(params).changes
}

const remove = (sql: string, params = {}) => {
  return db.prepare(sql).run(params).changes
}

const findConfig = (): ConfigContent => {
  const config = findOne('SELECT * FROM config WHERE id = 1') as Config
  if (config) {
    return JSON.parse(config.content) as ConfigContent
  } else {
    return {} as ConfigContent
  }
}

export { find, findOne, insert, update, remove, findConfig }
