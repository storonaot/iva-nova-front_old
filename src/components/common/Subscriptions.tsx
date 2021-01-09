import React, { FC } from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'

import ITunesIcon from '../../static/svg/iTunes.svg'
import YaMusicIcon from '../../static/svg/yaMusic.svg'

import { LINES_COLOR, SMALL_RADIUS, SECONDARY_FONT, SPACE_2 } from '../../theme'

export const SubscriptionButton = styled.a`
  margin: 0 auto;
  border: 1px solid ${LINES_COLOR};
  border-radius: ${SMALL_RADIUS};
  background-color: #fff;
  height: 56px;
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
    margin-bottom: ${SPACE_2};
  }
  ${media.greaterThan('medium')`
    margin: auto;
  `}
`

export const SubscribeTitle = styled.h4<{ withMargin?: boolean }>`
  font-family: ${SECONDARY_FONT};
  font-size: 1.5em;
  margin-bottom: ${({ withMargin = true }) => (withMargin ? SPACE_2 : 0)};
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
        orientation === 'horizontal' ? 0 : `${spacing.units * 2}px`};
      margin-left: ${({ orientation = 'horizontal', theme: { spacing } }) =>
        orientation === 'horizontal' ? `${spacing.units * 2}px` : 0}
    }
    > *:last-child {
      margin-left: ${({ orientation = 'horizontal', theme: { spacing } }) =>
        orientation === 'horizontal' ? `${spacing.units * 2}px` : 0}
    }
  `}
`

interface Props {
  href: string | null
}

export const ITunesButton: FC<Props> = ({ href }) =>
  href ? (
    <SubscriptionButton href={href} target="_blank">
      <ITunesIcon />
    </SubscriptionButton>
  ) : null

export const YaMusicButton: FC<Props> = ({ href }) =>
  href ? (
    <SubscriptionButton href={href} target="_blank">
      <YaMusicIcon />
    </SubscriptionButton>
  ) : null
