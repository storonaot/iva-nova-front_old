import React from 'react'
import { Props } from './index'

const Play = ({ fill = '#fff', opacity = '0.6' }: Props) => (
  <svg viewBox="0 0 60 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity={opacity}
      d="M33.6575 0.186035C17.834 0.186035 0.181641 20.7808 0.181641 36.4017C0.181641 52.0636 15.5281 61.8472 31.3516 61.8472C47.1751 61.8472 59.818 52.6391 59.818 36.9772C59.818 21.3564 49.481 0.186035 33.6575 0.186035ZM45.2667 33.9352L23.7976 46.8018C22.8435 47.3773 21.6905 46.6785 21.6905 45.5275V19.7943C21.6905 18.6844 22.8832 17.9855 23.7976 18.5199L45.2667 31.3866C46.1812 31.9621 46.1812 33.3597 45.2667 33.9352Z"
      fill={fill}
    />
  </svg>
)

export default Play