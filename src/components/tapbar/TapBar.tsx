import React, { useState } from 'react'
import { LineupPage, StatsPage, ZonesPage } from '../../pages'
import './tapbar.css'

interface Tab {
  id: number
  tabTitle: string
  content: React.ReactNode
}

export const TabBar = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number | null>(null)

  const tabs: Tab[] = [
    {
      id: 1,
      tabTitle: 'Stats',
      content: <StatsPage />
    },
    {
      id: 2,
      tabTitle: 'Lineup',
      content: <LineupPage />
    },
    {
      id: 3,
      tabTitle: 'Zones',
      content: <ZonesPage />
    }
  ]

  const handleTabClick = (tabId: number): void => {
    setActiveTab(tabId)
  }

  return (
    <nav className='container'>
      <ul className='tab-list'>
        {tabs.map((tab) => (
          <li
          className={`tab-list__item ${activeTab === tab.id ? 'active' : ''}`}
            key={tab.id}
            onClick={() => {
              handleTabClick(tab.id)
            }}
          >
            <span className={`tab-item__label ${activeTab === tab.id ? 'text-active' : ''}`}>
              {tab.tabTitle}
            </span>
          </li>
        ))}
      </ul>
      <section className='section-cont'>
        {activeTab !== null && (
          <article>
            <p>{tabs[activeTab - 1].content}</p>
          </article>
        )}
      </section>
    </nav>
  )
}
