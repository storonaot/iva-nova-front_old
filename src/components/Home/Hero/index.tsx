import React from 'react'

import { ABOUT_URL } from '../../../constants/sources'

import { Wrapper } from '../../common/Container'
import Button from '../../common/Button'
import Socials from '../../common/Socials'
import AspectRatioImage from '../../common/AspectRatioImage'

import ITunesIcon from '../../../static/svg/iTunes.svg'
import YaMusicIcon from '../../../static/svg/yaMusic.svg'
import mainPhoto from './main_photo.jpg'

import {
  Root,
  CarrierImageContainer,
  TreeImageContainer,
  Card,
  Content,
  Title,
  Description,
  SocialsWrapper,
  ButtonWrapper,
  SubscribeTitle,
  SubscriptionsWrapper,
  SubscriptionButton,
  SocialsRoot,
  ImageWrapper,
} from './styles'

const Hero = () => (
  <Root>
    <CarrierImageContainer />
    <TreeImageContainer />
    <Wrapper>
      <Card>
        <ImageWrapper>
          <AspectRatioImage image={mainPhoto} />
        </ImageWrapper>
        <Content>
          <Title>Ива Нова (этно-экстрим, world music)</Title>
          <Description>
            - это альтернативный этно-экстрим, который экспериментально сочетает в себе славянские
            мотивы и панковский напор, танцевальные техно-ритмы и авангардные шумовые эффекты.
          </Description>
          <ButtonWrapper>
            <Button href={ABOUT_URL} isBlock>
              подробнее о группе
            </Button>
          </ButtonWrapper>
          <SocialsRoot>
            <SubscribeTitle>Подписывайтесь на нас!</SubscribeTitle>
            <SocialsWrapper>
              <Socials size={56} padded={false} />
            </SocialsWrapper>
          </SocialsRoot>
          <SubscriptionsWrapper>
            <SubscriptionButton>
              <ITunesIcon />
            </SubscriptionButton>
            <SubscriptionButton>
              <YaMusicIcon />
            </SubscriptionButton>
          </SubscriptionsWrapper>
        </Content>
      </Card>
    </Wrapper>
  </Root>
)

export default Hero
