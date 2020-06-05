import React from 'react'

import { Root } from './styles'

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

const Slider = ({ children }: Props) => {
  return (
    <Root>
      {React.Children.map(children, (child: React.ReactElement) => React.cloneElement(child))}
    </Root>
  )
}

export default Slider
