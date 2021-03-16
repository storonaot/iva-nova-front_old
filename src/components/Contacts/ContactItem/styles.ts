import styled from 'styled-components'
import { DEFAULT_IMAGE_URL } from '../../../constants/ui'
import { SECONDARY_FONT, SPACE_2 } from '../../../theme'

export const Photo = styled.div<{ imageUrl: string }>`
  width: 100px;
  height: 100px;
  background-image: url(${({ imageUrl }) => imageUrl}), url(${DEFAULT_IMAGE_URL});
  background-size: cover;
  background-position: center center;
  border: 10px solid #fff;
  box-sizing: content-box;
  border-radius: 50%;
  margin-right: ${SPACE_2};
  box-shadow: 0px 4px 24px 0px #0000001a;
`

export const Root = styled.div`
  display: flex;
  align-items: center;
`

export const Name = styled.div`
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
`

export const Position = styled.div`
  font-family: ${SECONDARY_FONT};
`

export const PhoneNumber = styled.div`
  font-family: ${SECONDARY_FONT};
  font-weight: 600;
  line-height: 2em;
`
