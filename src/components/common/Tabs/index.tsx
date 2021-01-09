import React from 'react'
import { TabItem, TabList } from './styles'

interface Tab {
  id: string | number
  label: string
}

interface Props {
  tabs: Tab[]
  activeTab: string | number
  onChange: (tabId: string | number) => void
}

const Tabs = ({ tabs, activeTab, onChange }: Props) => {
  return (
    <TabList>
      {tabs.map(tab => (
        <TabItem
          isActive={activeTab === tab.id}
          key={tab.id}
          onClick={() => {
            onChange(tab.id)
          }}
        >
          {tab.label}
        </TabItem>
      ))}
    </TabList>
  )
}

export default Tabs
