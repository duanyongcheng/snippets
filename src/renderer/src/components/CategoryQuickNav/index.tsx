import { AllApplication, ApplicationTwo } from '@icon-park/react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import styles from '@renderer/assets/global.module.scss'

function CategoryAction() {
  return (
    <div className="border-b-2 my-2">
      <div className="px-2 my-2 mb-1 text-[10px]">快捷操作</div>
      <NavLink
        to={`/config/category/contentList`}
        key="all"
        className={({ isActive }) => {
          return classNames([styles.commonItem, { [styles.active]: isActive }])
        }}
        end
      >
        <div className="flex flex-row items-center">
          <AllApplication theme="outline" size="12" strokeWidth={3} />
          <div className="ml-1">所有片段</div>
        </div>
      </NavLink>
      <NavLink
        to={`/config/category/contentList/0`}
        className={({ isActive }) => {
          return classNames([styles.commonItem, { [styles.active]: isActive }])
        }}
        key={0}
        end
      >
        <div className="flex flex-row items-center">
          <ApplicationTwo theme="outline" size="12" strokeWidth={3} />
          <div className="ml-1">未分类</div>
        </div>
      </NavLink>
    </div>
  )
}

export default CategoryAction
