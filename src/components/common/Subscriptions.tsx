import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import ITunesIcon from '../../static/svg/iTunes.svg'
import YaMusicIcon from '../../static/svg/yaMusic.svg'

import { LINES_COLOR, SMALL_RADIUS, SPACE_3, SECONDARY_FONT } from '../../theme'

export const SubscriptionButton = styled.a`
  border: 1px solid ${LINES_COLOR};
  border-radius: ${SMALL_RADIUS};
  background-color: #fff;
  height: 56px;
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SubscribeTitle = styled.h4`
  font-family: ${SECONDARY_FONT};
  font-size: 1.5em;
  margin-bottom: ${SPACE_3};
`

export interface SubscriptionsWrapperProps {
  orientation?: 'horizontal' | 'vertical'
}

export const SubscriptionsWrapper = styled.div<SubscriptionsWrapperProps>`
  ${media.greaterThan<SubscriptionsWrapperProps>('medium')`
    display: flex;
    flex-direction: ${({ orientation = 'horizontal' }) =>
      orientation === 'horizontal' ? 'row' : 'column'};
    justify-content: center;
    align-items: center;
    max-width: 497px;
    > *:first-child {
      margin-bottom: ${({ orientation = 'horizontal', theme: { spacing } }) =>
        orientation === 'horizontal' ? 0 : `${spacing.units * 2}px`}
    }
    > *:last-child {
      margin-left: ${({ orientation = 'horizontal', theme: { spacing } }) =>
        orientation === 'horizontal' ? `${spacing.units * 2}px` : 0}
    }
  `}
`

export const ITunesButton = () => (
  <SubscriptionButton>
    <ITunesIcon />
  </SubscriptionButton>
)

export const YaMusicButton = () => (
  <SubscriptionButton>
    <YaMusicIcon />
  </SubscriptionButton>
)
