import { Add, SettingConfig } from '@icon-park/react'
import styles from './styles.module.scss'
import { useSubmit } from 'react-router-dom'
export default function CategortFootNav() {
  const submit = useSubmit()
  return (
    <div className={styles.nav}>
      <div className={styles.iconWrapper}>
        <Add
          theme="outline"
          size="20"
          fill="#333"
          onClick={() => {
            submit({ action: 'ADD' }, { method: 'POST' })
          }}
        />
      </div>
      <div className={styles.iconWrapper}>
        <SettingConfig theme="outline" size="20" fill="#333" />
      </div>
    </div>
  )
}
