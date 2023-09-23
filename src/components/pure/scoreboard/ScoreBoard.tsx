import './ScoreBoard.css'

interface TeamData {
  goals: number
}

interface MatchData {
  matchId: string
  leftTeam: TeamData
  rightTeam: TeamData
}

interface Props {
  data: MatchData[]
  loading: boolean
}

export const ScoreBoard: React.FC<Props> = ({ data, loading }) => {
  if (data === null || loading) {
    return <p>Loading...</p>
  } else {
    const match = data[0]
    const leftTeamGoals = match.leftTeam.goals
    const rightTeamGoals = match.rightTeam.goals
    return (
          <section className='board'>
            <section className='central-area'>
              <article className='team-one'>
                <div className='frame'>
                <div className='t-box'><h2 className='label'>Nord City</h2></div>
                  <div className='badge'>
                    <img width='41px' height='40px' src="https://i.postimg.cc/htW06BPG/Norwich-City-F-C-PNG-Image.png" alt="team1" />
                  </div>
                </div>
              </article>

              <article className='score'>
                <div className='container-crum'>

                  <div className='scores'>
                    <div className='box-s'><h3 className='scoreboard'>{leftTeamGoals }</h3></div>
                    <div className='separator'> <img src="https://i.postimg.cc/vB3HtfCw/Separator.png" alt="icon" /></div>
                  <div className='box-s'> <h3 className='scoreboard'>{rightTeamGoals}</h3></div>
                  </div>

                  <h3 className='finished'>+ 1 points</h3>

                  <div className='token'>
                    <img className='coin' src="https://i.postimg.cc/50pvzYS6/Coin.png" alt="icon" />

                    <h3 className='coint'>2</h3>
                  </div>

                </div>
              </article>

            <article className='team-two'>
              <div className='frame'>
              <div className='badge'>
                  <img width='41px' height='40px' src="https://i.postimg.cc/wj4fhY2T/pngwing-com-1.png" alt="team1" />
              </div>
              <div className='t-box'><h2 className='label'>Fscg FC</h2></div>
              </div>
            </article>
          </section>
      </section>
    )
  }
}
