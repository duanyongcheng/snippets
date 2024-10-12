import classNames from 'classnames'
import { NavLink, useSubmit } from 'react-router-dom'
import { useContextMenu } from 'mantine-contextmenu'
import dayjs from 'dayjs'
import { Delete } from '@icon-park/react'
import styles from '@renderer/assets/global.module.scss'

interface Props {
  content: Snippets
}

export default function ContentItem({ content }: Props) {
  const { showContextMenu } = useContextMenu()
  const submit = useSubmit()
  return (
    <NavLink
      to={`/config/category/contentList/${content.category_id}/content/${content.id}`}
      key={content.id}
      className={({ isActive }) => {
        return classNames([styles.commonItem, { [styles.active]: isActive }])
      }}
      end
      onContextMenu={showContextMenu(
        [
          {
            key: 'remove',
            icon: <Delete theme="outline" size="18" strokeWidth={3} />,
            title: '删除片段',
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
      <div className="text-[10px] opacity-85">{dayjs(content.created_at).format('YY/MM/DD')}</div>
    </NavLink>
  )
}
