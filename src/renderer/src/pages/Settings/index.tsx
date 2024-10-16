import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'
import styles from './styles.module.scss'
import { useLoaderData, useSubmit } from 'react-router-dom'

type FieldType = {
  shortCut?: string
  dbConfig?: string
}

export default function Settings() {
  const submit = useSubmit()
  const config = useLoaderData() as ConfigContent

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.info('Success:', values)
    submit(values, { method: 'POST' })
  }

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <main className={styles.container}>
      <div className={styles.formWrapper}>
        <h1 className={styles.title}>配置项</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className={styles.form}
        >
          <Form.Item<FieldType>
            label={<span className={styles.label}>快捷键配置</span>}
            name="shortCut"
            initialValue={config.shortCut}
          >
            <Input className={styles.input} />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className={styles.label}>数据库配置</span>}
            name="dbConfig"
            initialValue={config.dbConfig}
          >
            <Input className={styles.input} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className={styles.submitButton}>
              保存
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  )
}
