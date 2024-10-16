import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'
import styles from './styles.module.scss'

type FieldType = {
  shortCut?: string
  dbConfig?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

export default function Settings() {
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
          >
            <Input className={styles.input} />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className={styles.label}>数据库配置</span>}
            name="dbConfig"
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
