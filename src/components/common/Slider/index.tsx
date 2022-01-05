import React, { FC, ReactElement } from 'react'

import { Root } from './styles'

const Slider: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <Root>
      {React.Children.map(children, (child: React.ReactElement) => React.cloneElement(child))}
    </Root>
  )
}

export default Slider
