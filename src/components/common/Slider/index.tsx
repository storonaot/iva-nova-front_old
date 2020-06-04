import React from 'react'

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

const Slider = ({ children }: Props) => {
  return (
    <div>
      {React.Children.map(children, (child: React.ReactElement) => React.cloneElement(child))}
    </div>
  )
}

export default Slider
