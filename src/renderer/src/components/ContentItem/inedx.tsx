import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import dayjs from 'dayjs'
import globalStyles from '@renderer/assets/global.module.scss'
import useContent from '@renderer/hooks/useContent'
import { snippetStore } from '@renderer/store/snippetStore'

interface Props {
  content: Snippets
}

export default function ContentItem({ content }: Props) {
  const { useContentContextMenu } = useContent()
  const { setSnippet } = snippetStore()
  console.log('ContentItem', content)
  const buildUrl = `/config/category/contentList/${content.category_id}/content/${content.id}`
  console.info('ContentItem URL ', buildUrl)
  return (
    <NavLink
      to={buildUrl}
      key={content.id}
      className={({ isActive }) => {
        return classNames([globalStyles.commonItem, { [globalStyles.active]: isActive }])
      }}
      onContextMenu={useContentContextMenu(content)}
      onDragStart={() => {
        setSnippet(content)
      }}
      end
    >
      <div className="truncate"> {content.title}</div>
      <div className="text-[10px] opacity-85">{dayjs(content.created_at).format('YY/MM/DD')}</div>
    </NavLink>
  )
}
