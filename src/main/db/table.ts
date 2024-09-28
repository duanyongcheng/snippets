import { db } from './connects'
import { Random } from 'mockjs'

db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
        UNIQUE(name)
    )
`)

for (let i = 0; i < 10; i++) {
  const name = Random.title(5, 10)
  db.prepare('INSERT INTO categories (name) VALUES (?)').run(`${name}`)
}

db.exec(`
    CREATE TABLE IF NOT EXISTS snippets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        category_id INTEGER NULL,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
`)
