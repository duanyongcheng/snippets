export default async ({ request }) => {
  const data = await request.fromData()
  console.info(data)
  return ''
}
