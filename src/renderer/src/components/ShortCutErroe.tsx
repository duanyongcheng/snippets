import { errorStore } from '@renderer/store/errorStore'
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
    <div>
      <h1 className="bg-red-700">{error}</h1>
    </div>
  )
}

export default ShortCutError
