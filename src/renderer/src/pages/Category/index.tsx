import { Link, Outlet, useLoaderData } from 'react-router-dom'
import styles from './category.module.scss'
import classNames from 'classnames'
import { Add, SettingConfig } from '@icon-park/react'

export default function Category() {
  const categories = useLoaderData() as Category[]
  const selctedId = 1
  return (
    <main className={classNames([styles.category, 'container'])}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            to={`/config/category/content/${category.id}`}
            key={category.id}
            className={classNames(styles.item, { [styles.active]: selctedId === category.id })}
          >
            {category.name}
          </Link>
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
