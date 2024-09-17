import { CodeContext, ContextProps } from '@renderer/context/CodeContext'
import { useContext } from 'react'

export default (): ContextProps => {
  const context = useContext(CodeContext)
  if (!context?.data) {
    throw new Error('useCode must be used within a CodeProvider')
  }
  return { ...context }
}
