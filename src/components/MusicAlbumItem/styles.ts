import styled from 'styled-components'
import { LINES_COLOR, SPACE_3, SPACE_4, SPACE_10 } from '../../theme'

export const MainHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${SPACE_4};
`

export const ImageWrapper = styled.div`
  max-width: 544px;
  width: 50%;
  border: 1px solid ${LINES_COLOR};
`

export const NumericList = styled.ol`
  list-style-type: decimal;
  list-style-position: outside;
  padding: 0 0 0 ${SPACE_3};
`

export const NumericListItem = styled.li`
  display: list-item;
  line-height: 2em;
  font-size: 0.9em;
`

export const TrackListWrapper = styled.div`
  margin-left: ${SPACE_4};
`

export const AlbumInfoWrapper = styled.div`
  display: flex;
  margin-bottom: ${SPACE_4};
`

export const SubscribtionsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${SPACE_4};
`

export const ContentWrapper = styled.div`
  margin-bottom: ${SPACE_10};
`
