import { instance } from './api'
import type { MatchData } from './dataTypes'

export async function fetchData (): Promise<MatchData[]> {
  try {
    const res = await instance.get('/api/stats')
    const data: MatchData[] = res.data
    console.log('Datos recibidos:', data)
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}
