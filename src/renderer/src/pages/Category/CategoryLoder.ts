export default async () => {
  return window.api.sql('SELECT * FROM categories ORDER BY id DESC', 'find')
}
