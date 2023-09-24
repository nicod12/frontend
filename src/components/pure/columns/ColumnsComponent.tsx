import { StatSection } from '..'
import type { TeamData } from '../../../api/dataTypes'
import './Columns.css'

interface Props {
  leftTeam: TeamData | null
  rightTeam: TeamData | null
}

interface Statistic {
  label: string
  accessor: keyof TeamData
}

const statistics: Statistic[] = [
  { label: 'Total Shots', accessor: 'shots' },
  { label: 'Shots on target', accessor: 'shotsOnTarget' },
  { label: 'Shots off target', accessor: 'shotsOffTarget' },
  { label: 'Assists', accessor: 'assists' },
  { label: 'Passes', accessor: 'passes' },
  { label: 'Short Passes', accessor: 'shortPasses' },
  { label: 'Long Passes', accessor: 'longPasses' },
  { label: 'High Passes', accessor: 'highPasses' },
  { label: 'Slidings', accessor: 'slidings' },
  { label: 'Interferes', accessor: 'interferes' },
  { label: 'Fouls', accessor: 'fouls' },
  { label: 'Deflects', accessor: 'deflects' },
  { label: 'Offsides', accessor: 'offsides' },
  { label: 'Corner Kicks', accessor: 'cornerKicks' },
  { label: 'Penalty Kicks', accessor: 'freeKicks' },
  { label: 'Yellow Cards', accessor: 'yellowCards' },
  { label: 'Red Cards', accessor: 'redCards' }
]

export const ColumnsComponent: React.FC<Props> = ({ leftTeam, rightTeam }: Props): JSX.Element => {
  const getStatValue = (team: TeamData | null, accessor: keyof TeamData): number => {
    if (team !== null) {
      const value = team[accessor]
      if (typeof value === 'number') {
        return value
      }
    }
    return 0
  }

  if (leftTeam === null || rightTeam === null) {
    return (
      <section className='colum-container'>
        <p>No hay datos disponibles</p>
      </section>
    )
  }

  return (
    <section className='colum-container'>
      <section className='game'>
      <section className='module'>
          {statistics.map((statistic, index) => {
            const leftValue = getStatValue(leftTeam, statistic.accessor)
            const rightValue = getStatValue(rightTeam, statistic.accessor)

            if (isNaN(leftValue) || isNaN(rightValue)) {
              return null
            }

            const total = leftValue + rightValue

            const leftPercentage = total !== 0 ? (leftValue / total) * 100 : 0
            const rightPercentage = total !== 0 ? (rightValue / total) * 100 : 0

            const orangeGradient = `linear-gradient(to right, orange ${leftPercentage}%, green ${rightPercentage}%)`
            const greenGradient = `linear-gradient(to right, green ${rightPercentage}%, orange ${leftPercentage}%)`

            return (
              <article className='info' key={index}>
                <StatSection
                  label={statistic.label}
                  leftValue={leftValue}
                  rightValue={rightValue}
                />
               <div className='progress'>
                <div className='progress-color' style={{ background: orangeGradient }}></div>
                <div className='progress-color' style={{ background: greenGradient }}></div>
              </div>
              </article>
            )
          })}
        </section>
      </section>
    </section>
  )
}
