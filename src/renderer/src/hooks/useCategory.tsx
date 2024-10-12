import { Delete } from '@icon-park/react'
import { useContextMenu } from 'mantine-contextmenu'
import { useSubmit } from 'react-router-dom'

export default () => {
  const { showContextMenu } = useContextMenu()
  const submit = useSubmit()

  const useCategoryContextMenu = (category: Category) => {
    return showContextMenu(
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
    )
  }
  return { useCategoryContextMenu }
}
