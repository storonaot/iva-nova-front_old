import React, { useState } from 'react'
import { TabItem, TabList } from './styles'

interface Tab {
  id: string | number
  label: string
}

interface Props {
  tabs: Tab[]
}

const Tabs = ({ tabs }: Props) => {
  const [activeTab] = useState(tabs[0].id)

  return (
    <TabList>
      {tabs.map(tab => (
        <TabItem isActive={activeTab === tab.id} key={tab.id}>
          {tab.label}
        </TabItem>
      ))}
    </TabList>
  )
}

export default Tabs
