import './stats.css'

export const StatsComponent = (): JSX.Element => {
  return (
   <>
    <section className='central-area'>
     <section className='match-result'>
        <div className='team-left'>
          <img src="https://i.postimg.cc/Bn6xYPwQ/Team-1.png" alt="team1" />
        </div>

        <section className='score'>
          <section>
            <article className='crumbs-score'>
              <div className="score-layout">
                <div className="crumbs-score">
                  <div className="line"></div>
                  <div className="frame">
                    <div className="text-score">2</div>
                    <div className="separator"></div>
                    <div className="text-score">1</div>
                  </div>
                  <div className="r-line"></div>
                </div>
                <div className="finished">
                  <h2 className='text-finished'>+3 points</h2>
                </div>
                <div className='training-token'>
                  <img src="https://i.postimg.cc/CKx0bgRr/Training-token.png" alt="token" />
                </div>
              </div>
            </article>
          </section>
        </section>

        <article className='team-right'>
          <img src="https://i.postimg.cc/HxQ5cwj3/Team-2.png" alt="team2" />
        </article>
     </section>
    </section>
     <img className='barra' src="https://i.postimg.cc/VLz1RmtB/Separador2.png" alt="separador2" />
     <article className='box-content'>
       <div className='module'>
        <div className='bar'>
          <div className='cont'>
            <div className='number'><h2 className='text-numb'>10</h2></div>
            <div className='description'><h2 className='text-descrip'>Total Shots</h2></div>
            <div className='number'><h2 className='text-numb'>4</h2></div>
          </div>
          <img src="" alt="" />
        </div>
      </div>
    </article>
      </>
  )
}
