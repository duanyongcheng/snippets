import { FolderClose } from '@icon-park/react'
import { NavLink, useSubmit } from 'react-router-dom'
import globalStyles from '@renderer/assets/global.module.scss'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { categoryStore } from '@renderer/store/categoryStore'
import { Input } from 'antd'
import useCategory from '@renderer/hooks/useCategory'
import { snippetStore } from '@renderer/store/snippetStore'
import useContent from '@renderer/hooks/useContent'

interface Props {
  category: Category
}

function CategoryItem({ category }: Props) {
  const { editCategory, setEditCategory } = categoryStore()
  const submit = useSubmit()
  const { useCategoryContextMenu } = useCategory()
  const { updateCategoryId } = useContent()
  const { sinppet } = snippetStore()
  return (
    <>
      {category.id === editCategory.id ? (
        <Input
          defaultValue={category.name}
          name="name"
          autoFocus
          className="outline-none bg-slate-100"
          onChange={(e) => {
            submit({ action: 'UPDATE', id: category.id, name: e.target.value }, { method: 'put' })
          }}
          // 回车的时候触发提交
          onPressEnter={() => {
            setEditCategory({} as Category)
          }}
        />
      ) : (
        <NavLink
          to={`/config/category/contentList/${category.id}`}
          onDoubleClick={() => {
            setEditCategory(category)
          }}
          key={category.id}
          className={({ isActive }) => {
            return classNames([
              globalStyles.commonItem,
              styles.notDrag,
              { [globalStyles.active]: isActive }
            ])
          }}
          onContextMenu={useCategoryContextMenu(category)}
          onDragOver={(e) => {
            e.preventDefault() // 阻止默认行为，让ondrop生效
            e.dataTransfer.dropEffect = 'move' // 去掉加号
            e.currentTarget.classList.add(styles.draging)
          }}
          onDragLeave={(e) => {
            e.currentTarget.classList.remove(styles.draging)
          }}
          onDrop={(e) => {
            e.currentTarget.classList.remove(styles.draging)
            console.info(sinppet)
            updateCategoryId(sinppet.id, category.id)
          }}
        >
          <div className="flex flex-row items-center w-full">
            <div className="truncate mr-2 flex-grow">{category.name}</div>
            <FolderClose theme="outline" size="12" strokeWidth={3} className="flex-shrink-0" />
          </div>
        </NavLink>
      )}
    </>
  )
}

export default CategoryItem
