import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import styles from './category.module.scss'
import classNames from 'classnames'
import { Add, AllApplication, FolderClose, SettingConfig } from '@icon-park/react'

export default function Category() {
  const categories = useLoaderData() as Category[]
  return (
    <main className={styles.container}>
      <div className={styles.categories}>
        <div className="px-2 mt-2 mb-1">快捷操作</div>
        <NavLink
          to={`/config/category/contentList`}
          end
          className={({ isActive }) => {
            return classNames([
              'font-bold mb-1 ml-1',
              styles.item,
              { [styles.active]: isActive },
              { 'ml-2': isActive }
            ])
          }}
        >
          <div className="flex flex-row items-center">
            <AllApplication theme="outline" size="12" strokeWidth={3} />
            <div className="ml-1">所有片段</div>
          </div>
        </NavLink>
        <NavLink
          to={`/config/category/contentList/0`}
          end
          className={({ isActive }) => {
            return classNames([
              'font-bold mb-1 ml-1',
              styles.item,
              { [styles.active]: isActive },
              { 'ml-2': isActive }
            ])
          }}
        >
          <div className="flex flex-row items-center">
            <AllApplication theme="outline" size="12" strokeWidth={3} />
            <div className="ml-1">未分类</div>
          </div>
        </NavLink>
        {categories.map((category) => (
          <NavLink
            to={`/config/category/contentList/${category.id}`}
            key={category.id}
            className={({ isActive }) => {
              return classNames([styles.item, { [styles.active]: isActive }])
            }}
          >
            <div className="flex flex-row items-center">
              <FolderClose theme="outline" size="12" strokeWidth={3} />
              <div className="ml-1">{category.name}</div>
            </div>
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
