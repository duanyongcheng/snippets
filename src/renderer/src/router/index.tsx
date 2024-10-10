import Category from '@renderer/pages/Category'
import CategoryLoder from '@renderer/pages/Category/CategoryLoder'
import Config from '@renderer/pages/Config'
import Content from '@renderer/pages/Content'
import ContentAction from '@renderer/pages/Content/ContentAction'
import ContentLoader from '@renderer/pages/Content/ContentLoader'
import ContentList from '@renderer/pages/ContentList'
import ContentListAction from '@renderer/pages/ContentList/ContentListAction'
import ContentListLoader from '@renderer/pages/ContentList/ContentListLoader'
import Home from '@renderer/pages/Home'
import Welcome from '@renderer/pages/Welcome'
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
            path: 'contentList/:cid?',
            loader: ContentListLoader,
            action: ContentListAction,
            element: <ContentList></ContentList>,
            children: [
              {
                index: true,
                element: <Welcome />
              },
              {
                path: 'content/:id',
                loader: ContentLoader,
                action: ContentAction,
                element: <Content />
              }
            ]
          }
        ]
      }
    ]
  }
])

export default router
