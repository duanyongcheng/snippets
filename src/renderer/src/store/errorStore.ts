import { create } from 'zustand'

interface ErrorData {
  error: string
  setError: (data: string) => void
}

export const errorStore = create<ErrorData>((set) => ({
  error: '',
  setError: (data: string) => set({ error: data })
}))
