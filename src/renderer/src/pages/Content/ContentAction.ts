export default async ({ request }) => {
  const data = await request.formData()
  console.info(data.get('id'))
  return ''
}
