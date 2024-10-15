import styles from './styles.module.scss'
import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'

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
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-xl">
        <h1 className="text-6xl font-black text-gray-800 mb-16 tracking-tight">配置项</h1>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className="w-full space-y-12"
        >
          <Form.Item<FieldType>
            label={<span className="text-2xl font-light text-gray-600 mb-2 block">快捷键配置</span>}
            name="shortCut"
          >
            <Input className="w-full h-16 bg-transparent border-0 border-b border-gray-300 focus:border-gray-800 text-xl transition-colors duration-300" />
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className="text-2xl font-light text-gray-600 mb-2 block">数据库配置</span>}
            name="dbConfig"
          >
            <Input className="w-full h-16 bg-transparent border-0 border-b border-gray-300 focus:border-gray-800 text-xl transition-colors duration-300" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full h-16 text-2xl font-bold bg-gray-800 hover:bg-gray-900 border-none rounded-none transition-colors duration-300"
            >
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </main>
  )
}
