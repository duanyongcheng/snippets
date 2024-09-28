import { create } from 'zustand'

interface SnippetStore {
  sinppet: Snippets
  setSnippet: (data: Snippets) => void
}

export const snippetStore = create<SnippetStore>((set) => ({
  sinppet: {} as Snippets,
  setSnippet: (data) => set({ sinppet: data })
}))
