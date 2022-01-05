import React, { FC } from 'react'

import { Root } from './styles'

const Slider: FC = ({ children }) => {
  return (
    <Root>
      {children}
      {/* {React.Children.map(children, (child: React.ReactElement) => React.cloneElement(child))} */}
    </Root>
  )
}

export default Slider
