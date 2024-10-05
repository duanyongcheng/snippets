import { db } from './connects'

const find = (sql: string) => {
  console.log('main sql {}', sql)
  return db.prepare(sql).all()
}

const findOne = (sql: string) => {
  return db.prepare(sql).get()
}

const insert = (sql: string) => {
  return db.prepare(sql).run()
}

const update = (sql: string, params: Record<string, string | number>) => {
  console.log('main sql {}', sql, params)
  return db.prepare(sql).run(params).changes
}

const remove = (sql: string) => {
  return db.prepare(sql).run()
}

export { find, findOne, insert, update, remove }
