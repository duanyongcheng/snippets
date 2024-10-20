import React, { useState, useEffect } from 'react'
import { Input, Button } from 'antd'
import styles from './styles.module.scss'

interface DirectoryInputProps {
  value?: string
  onChange?: (value: string) => void
}

const DirectoryInput: React.FC<DirectoryInputProps> = ({ value, onChange }) => {
  const [directory, setDirectory] = useState(value || '')

  useEffect(() => {
    setDirectory(value || '')
  }, [value])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDirectory(e.target.value)
    onChange?.(e.target.value)
  }

  const handleChooseDirectory = async () => {
    try {
      // 假设 window.electron.showOpenDialog 是可用的
      const result = await window.electron.showOpenDialog({
        properties: ['openDirectory']
      })

      if (!result.canceled && result.filePaths.length > 0) {
        setDirectory(result.filePaths[0])
        onChange?.(result.filePaths[0])
      }
    } catch (error) {
      console.error('Failed to open directory dialog:', error)
    }
  }

  return (
    <div className={styles.wrapper}>
      <Input
        value={directory}
        onChange={handleInputChange}
        placeholder="选择或输入数据库目录"
        className={styles.input}
      />
      <Button onClick={handleChooseDirectory} className={styles.button}>
        选择目录
      </Button>
    </div>
  )
}

export default DirectoryInput
