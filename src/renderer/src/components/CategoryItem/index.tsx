import { FolderClose } from '@icon-park/react'
import { NavLink } from 'react-router-dom'
import styles from '@renderer/assets/global.module.scss'
import classNames from 'classnames'

interface Props {
  category: Category
}

function CategoryItem({ category }: Props) {
  return (
    <NavLink
      to={`/config/category/contentList/${category.id}`}
      key={category.id}
      className={({ isActive }) => {
        return classNames([styles.commonItem, { [styles.active]: isActive }])
      }}
    >
      <div className="flex flex-row items-center">
        <FolderClose theme="outline" size="12" strokeWidth={3} />
        <div className="ml-1">{category.name}</div>
      </div>
    </NavLink>
  )
}

export default CategoryItem
