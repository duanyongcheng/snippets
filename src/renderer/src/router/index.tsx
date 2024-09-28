import Category from '@renderer/pages/Category'
import CategoryLoder from '@renderer/pages/Category/CategoryLoder'
import Config from '@renderer/pages/Config'
import Content from '@renderer/pages/Content'
import Home from '@renderer/pages/Home'
import { createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'config',
    element: <Config></Config>,
    children: [
      {
        path: 'category',
        loader: CategoryLoder,
        element: <Category />,
        children: [
          {
            path: 'content/:cid',
            element: <Content></Content>
          }
        ]
      }
    ]
  }
])

export default router
