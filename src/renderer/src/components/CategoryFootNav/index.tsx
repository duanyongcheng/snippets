import { Add, SettingConfig } from '@icon-park/react'
import styles from './style.module.scss'
export default function CategortFootNav() {
  return (
    <div className={styles.nav}>
      <div className={styles.iconWrapper}>
        <Add theme="outline" size="20" fill="#333" />
      </div>
      <div className={styles.iconWrapper}>
        <SettingConfig theme="outline" size="20" fill="#333" />
      </div>
    </div>
  )
}
