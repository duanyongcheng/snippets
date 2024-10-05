import React, { useState } from 'react'
import { Form, useLoaderData } from 'react-router-dom'
import styles from './content.module.scss'
import classNames from 'classnames'

export default function Content() {
  const initialSnippet = useLoaderData() as Snippets
  const [snippet, setSnippet] = useState(initialSnippet)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setSnippet((prevSnippet) => ({
      ...prevSnippet,
      [name]: value
    }))
    console.log('snippet', snippet)
  }

  return (
    <Form method="PUT">
      <main className={styles.container}>
        <input name="id" type="hidden" value={snippet.id} />
        <input
          name="title"
          placeholder="请输入title"
          className={classNames([styles.title, 'outline-none'])}
          value={snippet.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          className={styles.content}
          value={snippet.content}
          onChange={handleChange}
        />
        <div className={styles.save}>
          <button type="submit">保存</button>
        </div>
      </main>
    </Form>
  )
}
