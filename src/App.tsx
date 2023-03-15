import { useState } from 'react'
import './App.css'
import { useFetchRepos } from './hooks/useRepos'
import { useFavoriteReposStore } from './store/favoriteRepos'

function App() {
  const { data, isLoading } = useFetchRepos('fazt')
  const { favoriteReposIds, addFavoriteRepos, removeFavoriteRepos } = useFavoriteReposStore()

  if (isLoading) return <div>Carregando...</div>

  const isFavorite = (id: number) => favoriteReposIds.includes(id)

  const toggleFavorite = (id: number) => isFavorite(id) ? removeFavoriteRepos(id) : addFavoriteRepos(id)

  return data.map(repo => (
    <div key={repo.id} style={{ display: 'flex', gap: 12 }}>
      <button onClick={() => toggleFavorite(repo.id)}>{isFavorite(repo.id) ? 'dislike' : 'like'}</button>
      <h3>
        {repo.name} - {repo.description ?? 'Nenhuma descrição encontrada'}
      </h3>
    </div>
  ))
}

export default App
