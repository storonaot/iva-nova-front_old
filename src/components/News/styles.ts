import styled from 'styled-components'
import { SPACE_3, SMALL_RADIUS } from '../../theme'

export const BackDrop = styled.div`
  position: absolute;
  background-color: #c7c7c7bd;
  width: 100vw;
  height: 100%;
  top: 0;
  z-index: 1;
`

export const Modal = styled.div`
  background-color: #fff;
  padding: ${SPACE_3};
  max-width: 450px;
  text-align: center;
  border-radius: ${SMALL_RADIUS};
  position: sticky;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const ModalTitle = styled.h3`
  font-weight: 600;
  margin-bottom: ${SPACE_3};
  font-size: 1.1em;
`
