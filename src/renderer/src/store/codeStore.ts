import { create } from 'zustand'

interface CodeDate {
  data: Snippets[]
  setData: (data: Snippets[]) => void
}

export const codeStore = create<CodeDate>((set) => ({
  data: [],
  setData: (data) => set({ data })
}))
