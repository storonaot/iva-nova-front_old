import React, { useState } from 'react'

import { LeftArrowWrapper, RightArrowWrapper } from './styles'
import ArrowIcon from '../../../static/svg/arrow.svg'

interface Props {
  children: React.ReactNode
  goNext: () => void
  goPrev: () => void
  showArrows: boolean
}

const Slider = ({ children, goNext, goPrev, showArrows }: Props) => {
  // const [activePreview, setActivePreview] = useState(0)
  // perPage = 1
  // length = =ъхъъхъхх
  return (
    <div>
      <LeftArrowWrapper
        // onClick={() => {
        //   const previousPreview = activePreview === 0 ? 2 : activePreview - 1
        //   setActivePreview(previousPreview)
        // }}
        onClick={goPrev}
        isShown={showArrows}
      >
        <ArrowIcon />
      </LeftArrowWrapper>
      {children}
      <RightArrowWrapper
        // onClick={() => {
        //   const nextPreview = activePreview === 2 ? 0 : activePreview + 1
        //   setActivePreview(nextPreview)
        // }}
        onClick={goNext}
        isShown={showArrows}
      >
        <ArrowIcon />
      </RightArrowWrapper>
    </div>
  )
}

export default Slider

export const useSlider = ({ perPage = 3, length }: { perPage?: number; length: number }) => {
  const initialData = [...Array(perPage).keys()]

  const [activeIndexes] = useState(initialData)
  const goNext = () => {}
  const goPrev = () => {}

  const isShown = (index: number) => !!activeIndexes.filter((item: number) => item === index).length

  return { goNext, goPrev, perPage, length, isShown }
}
