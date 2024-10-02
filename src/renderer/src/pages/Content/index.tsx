import { useLoaderData } from 'react-router-dom'
import styles from './content.module.scss'
import classNames from 'classnames'

export default function Content() {
  const snippet = useLoaderData() as Snippets
  return (
    <main className={styles.container}>
      <input name="id" type="hidden" value={snippet.id} />
      <input
        name="title"
        placeholder="请输入title"
        className={classNames([styles.title, 'outline-none'])}
        defaultValue={snippet.title}
      ></input>
      <textarea name="content" className={styles.content} defaultValue={snippet.content}></textarea>
      <div className={styles.save}>
        <button>保存</button>
      </div>
    </main>
  )
}
