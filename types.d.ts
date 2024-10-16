type SqlActionType = 'find' | 'findOne' | 'insert' | 'update' | 'remove'
type WindowNameType = 'search' | 'config'
type SqlAction = {
  sql: string
  type: SqlActionType
}

type Snippets = {
  id: number
  category_id: number
  title: string
  content: string
  created_at: string
}

type Category = {
  id: number
  name: string
  created_at: string
}

type Config = {
  id: number
  content: string
}

type ConfigContent = {
  shortCut: string
  dbConfig: string
}
