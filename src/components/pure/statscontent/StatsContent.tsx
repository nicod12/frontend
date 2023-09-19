import './StatsContent.css'

export const StatsContent = (): JSX.Element => {
  return (
    <section className="stats-content">

      <section className='board'>
        <section className='central-area'>
          <article className='team-one'>
            <div className='frame'>
             <div className='t-box'><h2 className='label'>Inter Miami #2</h2></div>
              <div className='badge'>
                <img src="https://i.postimg.cc/TwJvzv3d/Group-5.png" alt="team1" />
              </div>
            </div>
          </article>

          <article className='score'>
            <div className='container-crum'>

              <div className='scores'>
                <div className='box-s'><h3 className='scoreboard'>1</h3></div>
                <div className='separator'> <img src="https://i.postimg.cc/vB3HtfCw/Separator.png" alt="icon" /></div>
               <div className='box-s'> <h3 className='scoreboard'>0</h3></div>
              </div>

              <h3 className='finished'>+ 3 points</h3>

              <div className='token'>
                <img className='coin' src="https://i.postimg.cc/50pvzYS6/Coin.png" alt="icon" />

                <h3 className='coint'>4</h3>
              </div>

            </div>
          </article>

          <article className='team-two'>
            <div className='frame'>
            <div className='badge'>
                <img src="https://i.postimg.cc/ZqKqX7hD/Club-Badge.png" alt="team1" />
            </div>
             <div className='t-box'><h2 className='label'>The GOAT #3</h2></div>
            </div>
          </article>
        </section>
      </section>
    </section>
  )
}
