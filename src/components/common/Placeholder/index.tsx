import React, { FC } from 'react'

const Placeholder: FC<{ sectionName?: string }> = ({ sectionName = '' }) => {
  return <div>Раздел {sectionName} не заполнен</div>
}

export default Placeholder
