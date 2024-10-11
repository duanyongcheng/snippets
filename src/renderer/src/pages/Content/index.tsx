import { Form, useLoaderData, useSubmit } from 'react-router-dom'
import styles from './content.module.scss'
import classNames from 'classnames'

export default function Content() {
  const { snippet, categories } = useLoaderData() as {
    snippet: Snippets
    categories: Category[]
  }
  console.log('snippet', snippet)
  console.log('categories', categories)
  const submit = useSubmit()

  return (
    <Form method="PUT" key={snippet.id}>
      <main className={styles.container}>
        <input name="id" type="hidden" value={snippet.id} />
        <input
          name="title"
          placeholder="请输入title"
          className={classNames([styles.title, 'outline-none'])}
          defaultValue={snippet.title}
          autoFocus
          onChange={(e) => {
            submit(e.target.form)
          }}
        />
        <select
          className={styles.select}
          name="category_id"
          value={snippet.category_id}
          onChange={(e) => {
            submit(e.target.form)
          }}
        >
          <option defaultValue={0}>未分类</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <textarea
          name="content"
          className={styles.content}
          defaultValue={snippet.content}
          onChange={(e) => {
            submit(e.target.form)
          }}
        />
      </main>
    </Form>
  )
}
