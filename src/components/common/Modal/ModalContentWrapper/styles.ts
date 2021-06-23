import styled from 'styled-components'
import { GRAY_COLOR } from '../../../../theme'

export const ArrowWrapper = styled.div<{ isRight?: boolean; isDisabled?: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) ${({ isRight }) => (isRight ? 'scale(-1, 1)' : '')};
  left: ${({ isRight }) => (isRight ? 'auto' : '40px')};
  right: ${({ isRight }) => (isRight ? '40px' : 'auto')};
  color: ${({ isDisabled, theme: { colors } }) =>
    isDisabled ? colors.grayDark : colors.lightGray};
  cursor: pointer;
`

export const CrossWrapper = styled.div`
  position: absolute;
  right: 50px;
  top: 50px;
  color: ${GRAY_COLOR};
  cursor: pointer;
  svg {
    width: 38px;
    height: 38px;
  }
`
