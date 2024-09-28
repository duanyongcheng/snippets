import { useLoaderData } from 'react-router-dom'
import styles from './content.module.scss'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
export default function ContentList() {
  const contentList = useLoaderData() as Snippets[]
  const [currentContent, setCurrentContent] = useState<Snippets>()
  useEffect(() => {
    if (contentList.length !== 0) {
      setCurrentContent(contentList[0])
    } else {
      setCurrentContent(undefined)
    }
  }, [contentList])
  return (
    <main className={styles.content}>
      <div className={styles.list}>
        {contentList.length !== 0 ? (
          contentList.map((content) => (
            <div
              key={content.id}
              className={classNames([
                styles.item,
                { [styles.active]: currentContent?.id === content.id }
              ])}
              onClick={() => {
                setCurrentContent(content)
              }}
            >
              {content.title}
            </div>
          ))
        ) : (
          <div>暂无内容</div>
        )}
      </div>
      <div className={styles.content}>
        {currentContent ? (
          <div>
            <h1>{currentContent.title}</h1>
            <p>{currentContent.content}</p>
          </div>
        ) : (
          <div>请选择内容</div>
        )}
      </div>
    </main>
  )
}
