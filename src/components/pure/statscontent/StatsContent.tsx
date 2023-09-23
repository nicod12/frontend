import { useEffect, useState } from 'react'
import { ColumnsComponent, ScoreBoard } from '..'
import { fetchData } from '../../../api/getStats'
import './StatsContent.css'

export const StatsContent = (): JSX.Element => {
  const [data, setData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const cachedData = localStorage.getItem('cachedData')
    let responseData: any[] = []

    if (cachedData !== null) {
      responseData = JSON.parse(cachedData)
      setData(responseData)
      setLoading(false)
    } else {
      fetchData()
        .then(data => {
          responseData = data
          localStorage.setItem('cachedData', JSON.stringify(data))
          setData(responseData)
          setLoading(false)
        })
        .catch(error => {
          console.error(error)
          responseData = []
          setLoading(false)
        })
    }
  }, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <section className="stats-content">
      <ScoreBoard data={data} loading={loading} />
      {!loading && data.length > 0 && (
        <ColumnsComponent
          leftTeam={data[0].leftTeam}
          rightTeam={data[0].rightTeam}
        />
      )}
    </section>
  )
}
