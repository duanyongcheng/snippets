import { Add } from '@icon-park/react'
import classNames from 'classnames'
import { Form, useSubmit } from 'react-router-dom'
import styles from '@renderer/assets/global.module.scss'

function ContentSearch() {
  const submit = useSubmit()
  return (
    <Form>
      <div className={classNames(styles.search)}>
        <input
          name="searchKey"
          type="text"
          placeholder="搜索..."
          className="outline-none"
          onChange={(e) => {
            submit(e.target.form)
          }}
        ></input>
        <Add
          theme="outline"
          size="18"
          fill="#000000"
          strokeWidth={2}
          className="opacity-85"
          onClick={() => {
            submit({ action: 'add' }, { method: 'post' })
          }}
        ></Add>
      </div>
    </Form>
  )
}

export default ContentSearch
