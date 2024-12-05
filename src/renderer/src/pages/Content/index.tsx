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
        <input name="category_id" type="hidden" value={snippet.category_id} />
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
