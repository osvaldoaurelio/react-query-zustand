import { useQuery, QueryFunctionContext } from '@tanstack/react-query'
import api from '../api'

type ReposResult = {
  id: number
  name: string
  description: string
}

async function fetchRepos(ctx: QueryFunctionContext) {
  const [, username] = ctx.queryKey

  const { data } = await api.get<ReposResult[]>(`users/${username}/repos`)

  return data
}

export function useFetchRepos(username: string) {
  return useQuery(['repos', username], fetchRepos)
}
