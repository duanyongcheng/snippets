import { AllApplication, ApplicationTwo } from '@icon-park/react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

function CategoryAction() {
  return (
    <div>
      <div className="px-2 mt-2 mb-1">快捷操作</div>
      <NavLink
        to={`/config/category/contentList`}
        key="all"
        end
        // className={({ isActive }) => {
        //   return classNames([{ ['commonItem']: isActive }])
        // }}
        className={classNames('commonItem')}
      >
        <div className="flex flex-row items-center">
          <AllApplication theme="outline" size="12" strokeWidth={3} />
          <div className="ml-1">所有片段</div>
        </div>
      </NavLink>
      <NavLink
        to={`/config/category/contentList/0`}
        className={classNames('commonItem')}
        key={0}
        end
        // className={({ isActive }) => {
        //   return classNames([{ ['commonItem']: isActive }])
        // }}
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
