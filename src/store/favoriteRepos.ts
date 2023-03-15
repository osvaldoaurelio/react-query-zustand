import create from 'zustand'
import { persist } from 'zustand/middleware'

type FavoriteReposState = {
  favoriteReposIds: number[]
  addFavoriteRepos: (id: number) => void
  removeFavoriteRepos: (id: number) => void
}

export const useFavoriteReposStore = create(persist<FavoriteReposState>((set, get) => ({
  favoriteReposIds: [],
  addFavoriteRepos: (id) => set({ favoriteReposIds: [...get().favoriteReposIds, id] }),
  removeFavoriteRepos: (id) => set({
    favoriteReposIds: get().favoriteReposIds.filter(repoId => repoId !== id)
  })
}), {
  name: 'favorite-repos'
}))