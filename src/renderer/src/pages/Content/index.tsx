import { Form, useLoaderData } from 'react-router-dom'
import styles from './content.module.scss'
import classNames from 'classnames'

export default function Content() {
  const snippet = useLoaderData() as Snippets
  return (
    <Form method="PUT">
      <main className={styles.container}>
        <input name="id" type="hidden" value={snippet.id} />
        <input
          placeholder="请输入title"
          className={classNames([styles.title, 'outline-none'])}
          value={snippet.title}
          onChange={() => {}}
        ></input>
        <textarea className={styles.content} value={snippet.content} onChange={() => {}}></textarea>
        <div className={styles.save}>
          <button>保存</button>
        </div>
      </main>
    </Form>
  )
}
