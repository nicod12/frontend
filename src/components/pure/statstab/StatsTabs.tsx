import { Crumbs, TapBar } from '..'
import './StatsTabs.css'

export const StatsTabs = (): JSX.Element => {
  return (
    <section className='stats-tab'>
      <Crumbs />
      <TapBar />
    </section>
  )
}
