import { useLoaderData } from 'react-router-dom'
import styles from './content.module.scss'

export default function Content() {
  const snippet = useLoaderData() as Snippets
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{snippet.title}</h1>
      <div className={styles.content}>{snippet.content}</div>
    </main>
  )
}
