import { create } from 'zustand'

interface CategoryStore {
  editCategory: Category
  setEditCategory: (data: Category) => void
}

export const categoryStore = create<CategoryStore>((set) => ({
  editCategory: {} as Category,
  setEditCategory: (editCategory) => set({ editCategory })
}))
