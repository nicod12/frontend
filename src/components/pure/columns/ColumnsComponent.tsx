import { StatSection } from '..'
import type { TeamData } from '../../../api/dataTypes'
import './Columns.css'

interface Props {
  leftTeam: TeamData | null
  rightTeam: TeamData | null
}

export const ColumnsComponent: React.FC<Props> = ({ leftTeam, rightTeam }: Props): JSX.Element => {
  if (leftTeam === null || rightTeam === null) {
    return (
      <section className='colum-container'>
        <p>No hay datos disponibles</p>
      </section>
    )
  }

  console.log('leftTeam:', leftTeam)
  console.log('rightTeam:', rightTeam)

  const leftTeamShots = leftTeam?.shots ?? 0
  const rightTeamShots = rightTeam?.shots ?? 0

  return (
    <section className='colum-container'>
      <section className='game'>
        <section className='module'>
          <article className='info'>
            <StatSection label="Shots" leftValue={leftTeamShots} rightValue={rightTeamShots} />
            <div className='progress'></div>
          </article>
        </section>
      </section>
    </section>
  )
}
