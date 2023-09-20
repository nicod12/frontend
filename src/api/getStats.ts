import { instance } from './api'
export async function fetchData (): Promise<void> {
  try {
    const res = await instance.get('/api/stats')
    const data = res.data
    console.log('Datos recibidos:', data)
    return data
  } catch (error) {
    console.log(error)
  }
}
