import { useState } from 'react'
import './TapBar.css'
import { LineupComponent, StatsContent } from '..'

export const TapBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeLabel, setActiveLabel] = useState(-1)

  const handleTabClick = (index: number): void => {
    setActiveTab(index)
  }

  const handleLabelClick = (index: number): void => {
    setActiveLabel(index)
  }

  return (
<section>
      <ul className="tab-bar">
        <li className={`tab ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => {
              handleTabClick(0)
            }}
        >
          <div className="tab-item">
            <div
              className={`tab-label ${activeLabel === 0 ? 'active' : ''}`}
              onClick={() => {
                handleTabClick(0)
              }}
            >
              Tab 1
            </div>
          </div>
        </li>
        <li className={`tab ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => {
              handleTabClick(1)
            }}
        >
          <div className="tab-item">
            <div
              className={`tab-label ${activeLabel === 1 ? 'active' : ''}`}
              onClick={() => {
                handleLabelClick(1)
              }}
            >
              Tab 2
            </div>
          </div>
        </li>
        <li className={`tab ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => {
              handleTabClick(2)
            }}
        >
          <div className="tab-item">
            <div
              className={`tab-label ${activeLabel === 2 ? 'active' : ''}`}
              onClick={() => {
                handleLabelClick(2)
              }}
            >
              Tab 3
            </div>
          </div>
        </li>
        <li className={`tab visible ${activeTab === 3 ? 'active' : ''}`}
            onClick={() => {
              handleTabClick(3)
            }}
         >
          <div className="tab-item tab-item-special">
            <h2
              className={`tab-label-special ${activeLabel === 3 ? 'active' : ''}`}
              onClick={() => {
                handleLabelClick(3)
              }}
            >
              Stats
            </h2>
          </div>
          {activeTab === 3 && <StatsContent/>}
        </li>
        <li className={`tab visible ${activeTab === 4 ? 'active' : ''}`}
            onClick={() => {
              handleTabClick(4)
            }}
        >
          <div className="tab-item tab-item-special">
            <h2
              className={`tab-label-special ${activeLabel === 4 ? 'active' : ''}`}
              onClick={() => {
                handleLabelClick(4)
              }}
            >
              Lineup
            </h2>
          </div>
          {activeTab === 4 && <LineupComponent/>}
        </li>
      </ul>
    </section>
  )
}
