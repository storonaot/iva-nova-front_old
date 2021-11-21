import React, { useEffect, useRef, ReactNode, KeyboardEvent } from 'react'
import Arrow from '../../../../static/svg/arrow.svg'
import Cross from '../../../../static/svg/cross.svg'

import { ArrowWrapper, CrossWrapper } from './styles'

interface Props<T> {
  itemList: Array<T>
  setCurrentIndex: (index: number | null) => void
  setCurrentItem: (item: T | null) => void
  currentIndex: number | null
  children: ReactNode
}

const ModalContentWrapper = <T,>({
  itemList,
  setCurrentIndex,
  setCurrentItem,
  currentIndex,
  children,
}: Props<T>) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (wrapperRef.current != null) wrapperRef.current.focus()

    return () => {
      if (wrapperRef.current) wrapperRef.current.blur()
    }
  }, [wrapperRef])

  const goPrev = () => {
    if (itemList == null) return

    if (currentIndex != null && currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrentIndex(currentIndex - 1)
      setCurrentItem(itemList[newIndex])
    }
  }
  const goNext = () => {
    if (itemList == null) return

    if (currentIndex != null && currentIndex < itemList?.length - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      setCurrentItem(itemList[newIndex])
    }
  }

  const onModalClose = () => {
    setCurrentIndex(null)
    setCurrentItem(null)
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const ARROW_RIGHT_CODE = 39
    const ARROW_LEFT_CODE = 37
    const ESCAPE_CODE = 27

    if (event.keyCode === ARROW_RIGHT_CODE) goNext()
    if (event.keyCode === ARROW_LEFT_CODE) goPrev()
    if (event.keyCode === ESCAPE_CODE) onModalClose()
  }

  return (
    <div ref={wrapperRef} onKeyDown={onKeyDown} role="button" tabIndex={0}>
      <CrossWrapper onClick={onModalClose}>
        <Cross />
      </CrossWrapper>
      <ArrowWrapper isDisabled={currentIndex === 0} onClick={goPrev}>
        <Arrow />
      </ArrowWrapper>
      {children}
      <ArrowWrapper
        isRight
        isDisabled={itemList != null && currentIndex === itemList.length - 1}
        onClick={goNext}
      >
        <Arrow />
      </ArrowWrapper>
    </div>
  )
}

export default ModalContentWrapper
