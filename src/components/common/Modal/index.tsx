import React, { FC } from 'react'
import ReactDOM from 'react-dom'

import { Overlay } from './styles'

const Modal: FC<{ isOpened: boolean }> = ({ isOpened, children }) => {
  let container
  if (typeof window !== 'undefined') {
    const rootContainer = document.createElement('div')
    const parentElem = document.querySelector('#__next')
    if (parentElem) parentElem.appendChild(rootContainer)
    container = rootContainer
  }
  const element = <Overlay>{children}</Overlay>

  return container && isOpened ? ReactDOM.createPortal(element, container) : null
}

export default Modal
