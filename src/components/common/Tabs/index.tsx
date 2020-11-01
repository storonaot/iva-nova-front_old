import React from 'react'

interface Tab {
  id: string | number
  label: string
}

interface Props {
  tabs: Tab[]
}

const Tabs = ({ tabs }: Props) => (
  <div style={{ display: 'flex', marginBottom: 40 }}>
    {tabs.map(tab => (
      <div key={tab.id}>{tab.label}</div>
    ))}
  </div>
)

export default Tabs
