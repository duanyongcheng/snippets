import { Form, NavLink, Outlet, useLoaderData, useSubmit } from 'react-router-dom'
import styles from './contentList.module.scss'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { Add } from '@icon-park/react'
export default function ContentList() {
  const contentList = useLoaderData() as Snippets[]
  const submit = useSubmit()
  return (
    <main className={styles.container}>
      <div className={styles.list}>
        <Form>
          <div className={styles.search}>
            <input
              name="searchKey"
              type="text"
              placeholder="搜索..."
              onChange={(e) => {
                submit(e.target.form)
              }}
            ></input>
            <Add
              theme="outline"
              size="18"
              fill="#000000"
              strokeWidth={2}
              className="opacity-85"
            ></Add>
          </div>
        </Form>
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
