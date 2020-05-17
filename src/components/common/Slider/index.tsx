import React from 'react'
import { PreviewList } from '../Preview'

interface Props {
  children: React.ReactElement | React.ReactElement[]
}

const Slider = ({ children }: Props) => {
  return (
    <PreviewList>
      {React.Children.map(children, (child: React.ReactElement) => React.cloneElement(child))}
    </PreviewList>
  )
}

export default Slider

// import React, { useState, useEffect } from 'react'

// import { LeftArrowWrapper, RightArrowWrapper } from './styles'
// import ArrowIcon from '../../../static/svg/arrow.svg'

// import useWindowSize from '../../../hooks/useWindowSize'
// import { PreviewList } from '../Preview'

// interface Props {
//   children: React.ReactElement | React.ReactElement[]
//   length: number
// }

// const TABLET_WIDTH = 768

// const Slider = ({ children, length }: Props) => {
//   const { width }: { width?: number } = useWindowSize()
//   const [perPage, setPerPage] = useState(width && width < TABLET_WIDTH ? 1 : 3)

//   // const initialIndexes = [...Array(perPage).keys()]
//   // const [activeIndexes, setActiveIndexes] = useState<number[]>(initialIndexes)

//   const initialMap = [...Array(length).keys()].reduce((acc, current) => {
//     return { ...acc, [current]: current < perPage }
//   }, {})

//   const [activeMap] = useState<{ [key: number]: boolean }>(initialMap)

//   console.log('activeMap', activeMap)

//   console.log('perPage', perPage)

//   useEffect(() => {
//     if (width && width < TABLET_WIDTH) {
//       if (perPage !== 1) setPerPage(1)
//     }

//     if (width && width > TABLET_WIDTH) {
//       if (perPage !== 3) setPerPage(3)
//     }
//   }, [width])

//   // const isShown = (index: number) => !!activeIndexes.filter((item: number) => item === index).length

//   // const goNext = () => {
//   //   setActiveIndexes(
//   //     activeIndexes.map(index => {
//   //       // if (index < length) return index + perPage
//   //       return index + perPage
//   //     }),
//   //   )
//   // }

//   // const goPrev = () => {
//   //   setActiveIndexes(activeIndexes.map(index => index - perPage))
//   // }

//   const showArrows = true

//   const goPrev = () => {}
//   const goNext = () => {}

//   // const [activePreview, setActivePreview] = useState(0)
//   // perPage = 1
//   // length = =ъхъъхъхх
//   return (
//     <div>
//       <LeftArrowWrapper
//         // onClick={() => {
//         //   const previousPreview = activePreview === 0 ? 2 : activePreview - 1
//         //   setActivePreview(previousPreview)
//         // }}
//         onClick={goPrev}
//         isShown={showArrows}
//       >
//         <ArrowIcon />
//       </LeftArrowWrapper>
//       <PreviewList>
//         {React.Children.map(children, (child: React.ReactElement, index) => (
//           <div style={{ display: activeMap[index] ? 'initial' : 'none' }}>
//             {React.cloneElement(child)}
//           </div>
//         ))}
//       </PreviewList>
//       <RightArrowWrapper
//         // onClick={() => {
//         //   const nextPreview = activePreview === 2 ? 0 : activePreview + 1
//         //   setActivePreview(nextPreview)
//         // }}
//         onClick={goNext}
//         isShown={showArrows}
//       >
//         <ArrowIcon />
//       </RightArrowWrapper>
//     </div>
//   )
// }

// export default Slider
