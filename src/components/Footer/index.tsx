import React from 'react'

import { CONTACTS_URL } from '../../constants/sources'

import Socials from '../common/Socials'
import Button from '../common/Button'

import {
  FooterRoot,
  FooterContainer,
  CarrierContainer,
  TadpolesContainer,
  Title,
  SocialsWrapper,
  Copyright,
} from './styles'

const Footer = () => (
  <FooterRoot>
    <TadpolesContainer />
    <CarrierContainer />
    <FooterContainer>
      <div>
        <Title>ИВА НОВА (этно-экстрим, world music)</Title>
        <SocialsWrapper>
          <Socials size={40} padded={false} />
        </SocialsWrapper>
        <Button href={CONTACTS_URL} isGhost>
          контакты
        </Button>
      </div>
      <Copyright>&copy; 2020 Ива Нова, официальный сайт</Copyright>
    </FooterContainer>
  </FooterRoot>
)

export default Footer
