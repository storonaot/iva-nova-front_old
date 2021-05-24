import React, { FC } from 'react'

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
import { Socials as SocialsType } from '../../api/types'

interface Props {
  socials: SocialsType
}

const Footer: FC<Props> = ({ socials }) => (
  <FooterRoot>
    <TadpolesContainer />
    <CarrierContainer />
    <FooterContainer>
      <div>
        <Title>ИВА НОВА (этно-экстрим, world music)</Title>
        <SocialsWrapper>
          <Socials size={40} padded={false} socials={socials} />
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
