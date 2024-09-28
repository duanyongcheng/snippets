import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import styles from './category.module.scss'
import classNames from 'classnames'
import { Add, SettingConfig } from '@icon-park/react'
import { useEffect } from 'react'

export default function Category() {
  const categories = useLoaderData() as Category[]
  const navication = useNavigate()
  useEffect(() => {
    if (categories.length === 0) return
    navication('/config/category/contentList/' + categories[0].id)
  }, [categories])
  return (
    <main className={classNames([styles.category, 'container'])}>
      <div className={styles.categories}>
        {categories.map((category) => (
          <NavLink
            to={`/config/category/contentList/${category.id}`}
            key={category.id}
            className={({ isActive }) => {
              return classNames([styles.item, { [styles.active]: isActive }])
            }}
          >
            {category.name}
          </NavLink>
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