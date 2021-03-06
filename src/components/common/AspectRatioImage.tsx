import React, { FC } from 'react'

import styled from 'styled-components'

export enum AspectRatio {
  '16:9' = '16:9',
  '4:3' = '4:3',
  '3:2' = '3:2',
  '8:5' = '8:5',
  '1:1' = '1:1',
}

interface Props {
  imageUrl: string
  defaultImageUrl?: string
  aspectRatio?: AspectRatio
  children?: React.ReactNode
}

const lib = {
  '16:9': '56.25%',
  '4:3': '75%',
  '3:2': '66.66%',
  '8:5': '62.5%',
  '1:1': '100%',
}

export const AspectRatioBox = styled.div<{ aspectRatio?: AspectRatio }>`
  height: 0;
  overflow: hidden;
  position: relative;
  padding-top: ${({ aspectRatio = AspectRatio['16:9'] }) => lib[aspectRatio as AspectRatio]};
  width: 100%;
`

export const AspectRatioInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ imageUrl }: Props) => imageUrl}),
    url(${({ defaultImageUrl }: Props) => defaultImageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const AspectRatioImage: FC<Props> = ({
  aspectRatio = AspectRatio['16:9'],
  imageUrl,
  defaultImageUrl = 'https://upload.wikimedia.org/wikipedia/ru/2/2a/Adventure_Time_with_Finn_%26_Jake.png',
  children,
}) => (
  <AspectRatioBox aspectRatio={aspectRatio}>
    <AspectRatioInner imageUrl={imageUrl} defaultImageUrl={defaultImageUrl} />
    {children}
  </AspectRatioBox>
)

export default AspectRatioImage
