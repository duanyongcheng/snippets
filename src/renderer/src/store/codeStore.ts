import { DataType } from '@renderer/data'
import { create } from 'zustand'

interface CodeDate {
  data: DataType[]
  setData: (data: DataType[]) => void
}

export const codeStore = create<CodeDate>((set) => ({
  data: [],
  setData: (data) => set({ data })
  // bears: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears })
}))
