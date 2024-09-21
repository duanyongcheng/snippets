import { create } from 'zustand'

interface SearchDate {
  search: string
  setSearch: (data: string) => void
}

export const searchStore = create<SearchDate>((set) => ({
  search: '',
  setSearch: (data) => set({ search: data })
  // bears: 0,
  // increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  // removeAllBears: () => set({ bears: 0 }),
  // updateBears: (newBears) => set({ bears: newBears })
}))
