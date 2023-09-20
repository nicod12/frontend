import { ColumnsComponent, ScoreBoard } from '..'
import './StatsContent.css'

export const StatsContent = (): JSX.Element => {
  return (
     <section className="stats-content">
      <ScoreBoard />
      <ColumnsComponent />
    </section>

  )
}
