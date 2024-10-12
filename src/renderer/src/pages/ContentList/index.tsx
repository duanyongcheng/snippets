import { Outlet, useLoaderData } from 'react-router-dom'
import styles from './contentList.module.scss'
import ContentSearch from '@renderer/components/ContentSearch'
import ContentItem from '@renderer/components/ContentItem/inedx'
export default function ContentList() {
  const contentList = useLoaderData() as Snippets[]
  return (
    <main className={styles.container}>
      <div className={styles.list}>
        <ContentSearch />
        {contentList.length !== 0 ? (
          contentList.map((content) => <ContentItem key={content.id} content={content} />)
        ) : (
          <div>暂无内容</div>
        )}
      </div>
      <div className={styles.snippet}>
        <Outlet></Outlet>
      </div>
    </main>
  )
}
