import { Outlet, useLoaderData } from 'react-router-dom'
import styles from './category.module.scss'
import CategoryItem from '@renderer/components/CategoryItem'
import CategoryAction from '@renderer/components/CategoryQuickNav'
import CategoryFootNav from '@renderer/components/CategoryFootNav'

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
      <CategoryFootNav />
      <div className={styles.content}>
        <Outlet></Outlet>
      </div>
    </main>
  )
}
