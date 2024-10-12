import { Delete, FolderClose } from '@icon-park/react'
import { NavLink, useSubmit } from 'react-router-dom'
import styles from '@renderer/assets/global.module.scss'
import classNames from 'classnames'
import { useContextMenu } from 'mantine-contextmenu'

interface Props {
  category: Category
}

function CategoryItem({ category }: Props) {
  const { showContextMenu } = useContextMenu()
  const submit = useSubmit()
  return (
    <NavLink
      to={`/config/category/contentList/${category.id}`}
      key={category.id}
      className={({ isActive }) => {
        return classNames([styles.commonItem, { [styles.active]: isActive }])
      }}
      onContextMenu={showContextMenu(
        [
          {
            key: 'remove',
            icon: <Delete theme="outline" size="18" strokeWidth={3} />,
            title: '删除分类',
            onClick: () => {
              submit({ action: 'DELETE', id: category.id }, { method: 'delete' })
            }
          }
        ],
        {
          className: 'contextMenu'
        }
      )}
    >
      <div className="flex flex-row items-center">
        <FolderClose theme="outline" size="12" strokeWidth={3} />
        <div className="ml-1">{category.name}</div>
      </div>
    </NavLink>
  )
}

export default CategoryItem
