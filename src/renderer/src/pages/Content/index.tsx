import { Form, useLoaderData } from 'react-router-dom'
import styles from './content.module.scss'
import classNames from 'classnames'

export default function Content() {
  const snippet = useLoaderData() as Snippets

  return (
    <Form method="PUT" key={snippet.id}>
      <main className={styles.container}>
        <input name="id" type="hidden" value={snippet.id} />
        <input
          name="title"
          placeholder="请输入title"
          className={classNames([styles.title, 'outline-none'])}
          defaultValue={snippet.title}
        />
        <textarea name="content" className={styles.content} defaultValue={snippet.content} />
        <div className={styles.save}>
          <button type="submit">保存</button>
        </div>
      </main>
    </Form>
  )
}
