import { NavLink, Outlet, useLoaderData } from 'react-router-dom'
import styles from './contentList.module.scss'
import classNames from 'classnames'
export default function ContentList() {
  const contentList = useLoaderData() as Snippets[]
  return (
    <main className={styles.content}>
      <div className={styles.list}>
        {contentList.length !== 0 ? (
          contentList.map((content) => (
            <NavLink
              to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
              key={content.id}
              className={({ isActive }) => {
                return classNames([styles.item, { [styles.active]: isActive }])
              }}
            >
              {content.title}
            </NavLink>
          ))
        ) : (
          <div>暂无内容</div>
        )}
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </main>
  )
}
