import './statusbar.css'
export const StatusBar = (): JSX.Element => {
  return (
    <section className='container-status'>
      <div className='time'>
        <h2 className='t-text'>9:41</h2>
      </div>

      <div className='icons'>
        <img className='net' src="https://i.postimg.cc/6qfgVcQF/Network-Signal.png" alt="icon-net" />
        <img className='wif' src="https://i.postimg.cc/Dz7htS9r/Wi-Fi.png" alt="icon-wifi" />
        <img className='bat' src="https://i.postimg.cc/zBwc538N/Battery.png" alt="icon-bat" />
      </div>
    </section>
  )
}
