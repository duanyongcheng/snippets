export default async () => {
  return window.api.sql('SELECT * FROM categories', 'find')
}
