import styles from './content.module.scss'
export default function Content() {
  return (
    <main className={styles.content}>
      <div className={styles.list}>list</div>
      <div className={styles.content}>content</div>
    </main>
  )
}
