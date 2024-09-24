import { errorStore } from '@renderer/store/errorStore'
import { Alert } from 'antd'
import { useEffect } from 'react'

function ShortCutError() {
  const { error, setError } = errorStore()
  useEffect(() => {
    const id = setTimeout(() => {
      setError('')
    }, 2000)
    return () => clearTimeout(id)
  }, [error])
  if (error === '') return <></>
  return (
    <main className="absolute top-0 w-full z-10">
      <Alert message={error} type="info" showIcon />
    </main>
  )
}

export default ShortCutError
