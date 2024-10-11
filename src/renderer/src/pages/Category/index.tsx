import { Outlet, useLoaderData } from 'react-router-dom'
import styles from './category.module.scss'
import { Add, SettingConfig } from '@icon-park/react'
import CategoryItem from '@renderer/components/CategoryItem'
import CategoryAction from '@renderer/components/CategoryQuickNav'

export default function Category() {
  const categories = useLoaderData() as Category[]
  return (
    <main className={styles.container}>
      <div className={styles.categories}>
        <CategoryAction />
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
      <div className={styles.nav}>
        <div className={styles.iconWrapper}>
          <Add theme="outline" size="20" fill="#333" />
        </div>
        <div className={styles.iconWrapper}>
          <SettingConfig theme="outline" size="20" fill="#333" />
        </div>
      </div>
      <div className={styles.content}>
        <Outlet></Outlet>
      </div>
    </main>
  )
}
