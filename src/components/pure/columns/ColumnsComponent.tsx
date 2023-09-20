// import { ZoneComponent } from '../zone/ZoneComponent'
import { useEffect, useState } from 'react'
import { fetchData } from '../../../api/getStats'
import './Columns.css'

export const ColumnsComponent = (): JSX.Element => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verificar si los datos ya están en el almacenamiento local
    const cachedData = localStorage.getItem('cachedData')

    if (cachedData !== null) {
      setData(JSON.parse(cachedData))
      setLoading(false)
    } else {
      fetchData()
        .then(responseData => {
          localStorage.setItem('cachedData', JSON.stringify(responseData))

          setData(responseData)
          setLoading(false)
        })
        .catch(error => {
          console.error(error)
          setLoading(false)
        })
    }
  }, [])

  return (
    <section className='colum-container'>

        <section className='game'>
          <section className='module'>
            <article className='info'>
              <section className='b-cont'>
                <h4 className='numb-inf'>10</h4>
                <h2 className='nam-stat lab-t'>Total Shots</h2>
                <h4 className='numb-inf'>4</h4>
              </section>

              <div className='progress'></div>

            </article>
          </section>
        </section>

    </section>
  )
}
