import React from 'react'

import AspectRatioImage from '../AspectRatioImage'

import { PreviewItem, ImageWrapper, Date, Description } from './styles'

export interface NewsItemType {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  date: string
  description: string
}

const NewsItem = ({ image, date, description }: NewsItemType) => (
  <PreviewItem>
    <ImageWrapper>
      <AspectRatioImage image={image} aspectRatio="4:3" />
    </ImageWrapper>
    <Date>{date}</Date>
    <Description>{description}</Description>
  </PreviewItem>
)

export default NewsItem
