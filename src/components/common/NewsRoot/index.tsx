import React from 'react'
import SectionRoot from '../SectionRoot'
import bgImage from '../../../static/images/bg1.jpg'

interface Props {
  children: React.ReactNode
}

const NewsRoot = ({ children }: Props) => <SectionRoot bgImage={bgImage}>{children}</SectionRoot>

export default NewsRoot
