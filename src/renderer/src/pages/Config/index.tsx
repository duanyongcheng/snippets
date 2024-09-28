import { Outlet } from 'react-router-dom'
import styles from './styles.module.scss'

export default function Config() {
  return (
    <main className={styles.container}>
      <Outlet />
      {/* <div></div>
      <div></div>
      <div className={styles.category}></div>
      <div className={styles.nav}></div>
      <div className={styles.snipptes}></div> */}
    </main>
  )
}
