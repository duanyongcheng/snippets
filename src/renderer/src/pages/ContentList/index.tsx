import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom'
import styles from './contentList.module.scss'
import classNames from 'classnames'
import { useCallback, useEffect } from 'react'
import dayjs from 'dayjs'
export default function ContentList() {
  const contentList = useLoaderData() as Snippets[]
  // const navigate = useNavigate()
  // const navigateToContent = useCallback(
  //   (categoryId: number, contentId: number) => {
  //     console.log('this is contentList')
  //     console.log('categoryId', categoryId)
  //     console.log('contentId', contentId)
  //     if (!contentId) {
  //       return
  //     }
  //     const path = bulidPath(categoryId, contentId)
  //     console.log('content path', path)
  //     console.log('content location.pathname', location.pathname)
  //     if (location.pathname === '/') {
  //       navigate(path)
  //     } else if (path.search(location.pathname) === -1) {
  //       console.log('content navigate location.pathname', location.pathname)
  //       navigate(path)
  //     }
  //   },
  //   [navigate, location]
  // )
  // const bulidPath = (categoryId: number, contentId: number) => {
  //   return `/config/category/contentList/${categoryId}/content/${contentId}`
  // }
  // useEffect(() => {
  //   if (contentList.length !== 0) {
  //     navigateToContent(contentList[0].category_id, contentList[0].id)
  //   }
  // }, [contentList])
  return (
    <main className={styles.container}>
      <div className={styles.list}>
        {contentList.length !== 0 ? (
          contentList.map((content) => (
            <NavLink
              to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
              key={content.id}
              end
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
