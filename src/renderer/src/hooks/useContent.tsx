import { Delete } from '@icon-park/react'
import { useContextMenu } from 'mantine-contextmenu'
import { useNavigate, useSubmit } from 'react-router-dom'

export default () => {
  const { showContextMenu } = useContextMenu()
  const submit = useSubmit()
  const nativate = useNavigate()
  const useContentContextMenu = (content: Snippets) => {
    return showContextMenu(
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
    )
  }

  const updateCategoryId = async (id: number, category_id: number) => {
    await window.api.sql(
      'UPDATE snippets SET category_id = @category_id WHERE id = @id',
      'update',
      {
        id,
        category_id
      }
    )
    nativate(`/config/category/contentList/${category_id}/content/${id}`)
  }

  return { useContentContextMenu, updateCategoryId }
}
