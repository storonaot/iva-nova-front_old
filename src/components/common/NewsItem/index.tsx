/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import AspectRatioImage, { AspectRatio } from '../AspectRatioImage'

import { PreviewItem, ImageWrapper, Date, Description } from './styles'

import { NEWS_URL } from '../../../constants/sources'

export interface NewsItemType {
  id: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  date: string
  description: string
  isLink?: boolean
}

const NewsItem = ({ id, image, date, description, isLink = false }: NewsItemType) => {
  const Content = () => (
    <>
      <ImageWrapper>
        <AspectRatioImage imageUrl={image} aspectRatio={AspectRatio['4:3']} />
      </ImageWrapper>
      <Date>{date}</Date>
      <Description>{description}</Description>
    </>
  )

  return isLink ? (
    <PreviewItem>
      <Link href={`${NEWS_URL}/${id}`}>
        <a>
          <Content />
        </a>
      </Link>
    </PreviewItem>
  ) : (
    <PreviewItem>
      <Content />
    </PreviewItem>
  )
}

export default NewsItem
