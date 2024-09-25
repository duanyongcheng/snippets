import Database, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron'
import fs from 'fs'
import path, { resolve } from 'path'
const dbFile = resolve(app.getPath('home'), '.config/snippets', 'snippets.db')
ensureDirectoryExistence(dbFile)
const db: BetterSqlite3.Database = new Database(dbFile, {})
db.pragma('journal_mode = WAL')

function ensureDirectoryExistence(filePath: string) {
  const dirname = path.dirname(filePath)
  if (!fs.existsSync(dirname)) {
    ensureDirectoryExistence(dirname)
    fs.mkdirSync(dirname)
  }
}

export { db }
