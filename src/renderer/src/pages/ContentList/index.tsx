import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import styles from './contentList.module.scss'
import classNames from 'classnames'
import { useEffect } from 'react'
import dayjs from 'dayjs'
export default function ContentList() {
  const contentList = useLoaderData() as Snippets[]
  const navication = useNavigate()
  useEffect(() => {
    if (contentList.length !== 0) {
      const path = `/config/category/contentList/${contentList[0].category_id}/content/${contentList[0].id}`
      navication(path)
    }
  }, [contentList])
  return (
    <main className={styles.container}>
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
              <div className="truncate"> {content.title}</div>
              <div className="text-[10px] opacity-85">
                {dayjs(content.created_at).format('YYYY/MM/DD')}
              </div>
            </NavLink>
          ))
        ) : (
          <div>暂无内容</div>
        )}
      </div>
      <div className={styles.snippet}>
        <Outlet></Outlet>
      </div>
    </main>
  )
}
