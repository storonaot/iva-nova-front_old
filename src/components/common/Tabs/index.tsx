import React from 'react'

interface Tab {
  value: string | number
  label: string
}

interface Props {
  tabs: Tab[]
}

const Tabs = ({ tabs }: Props) => (
  <div style={{ display: 'flex' }}>
    {tabs.map(tab => (
      <div key={tab.value}>{tab.label}</div>
    ))}
  </div>
)

export default Tabs
