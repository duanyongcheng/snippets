import { Form, NavLink, Outlet, useLoaderData, useSubmit } from 'react-router-dom'
import styles from './contentList.module.scss'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { Add, Delete } from '@icon-park/react'
import { useContextMenu } from 'mantine-contextmenu'
export default function ContentList() {
  const contentList = useLoaderData() as Snippets[]
  const submit = useSubmit()
  const { showContextMenu } = useContextMenu()
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
              onClick={() => {
                submit({ action: 'add' }, { method: 'post' })
              }}
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
              onContextMenu={showContextMenu(
                [
                  {
                    key: 'remove',
                    icon: <Delete theme="outline" size="18" strokeWidth={3} />,
                    title: 'Delete Snippets',
                    onClick: () => {
                      submit({ action: 'delete', id: content.id }, { method: 'delete' })
                    }
                  }
                ],
                {
                  className: 'contextMenu'
                }
              )}
            >
              <div className="truncate"> {content.title}</div>
              <div className="text-[10px] opacity-85">
                {dayjs(content.created_at).format('YY/MM/DD')}
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
