import React, { FC } from 'react'

import { ABOUT_URL } from '../../../constants/sources'

import { Wrapper } from '../../common/Container'
import Button from '../../common/Button'
import Socials from '../../common/Socials'
import AspectRatioImage from '../../common/AspectRatioImage'

import {
  ITunesButton,
  YaMusicButton,
  SubscribeTitle,
  SubscriptionsWrapper,
} from '../../common/Subscriptions'

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
  SocialsRoot,
  ImageWrapper,
} from './styles'
import { MediaLinks, Socials as SocialsType, About } from '../../../api/types'
import { getFullMediaUrl } from '../../../helpers'

interface Props {
  mediaLinks?: MediaLinks
  socialNetworks?: SocialsType
  about?: About | null
}

const Hero: FC<Props> = ({ mediaLinks, socialNetworks, about }) => (
  <Root>
    <CarrierImageContainer />
    <TreeImageContainer />
    <Wrapper>
      <Card>
        {about ? (
          <ImageWrapper>
            <AspectRatioImage imageUrl={getFullMediaUrl(about.main_photo.url)} />
          </ImageWrapper>
        ) : (
          'Главное изобрачение не загружено'
        )}
        <Content>
          <Title>{about ? about.title : 'Заголовок не заполнен'}</Title>
          <Description>{about ? about.description_short : 'Описание не заполнено'}</Description>
          <ButtonWrapper>
            <Button href={ABOUT_URL} isBlock>
              подробнее о группе
            </Button>
          </ButtonWrapper>
          {socialNetworks ? (
            <SocialsRoot>
              <SubscribeTitle>Подписывайтесь на нас!</SubscribeTitle>
              <SocialsWrapper>
                <Socials size={56} padded={false} socials={socialNetworks} />
              </SocialsWrapper>
            </SocialsRoot>
          ) : null}
          {mediaLinks ? (
            <SubscriptionsWrapper>
              <ITunesButton href={mediaLinks.itunes_src} />
              <YaMusicButton href={mediaLinks.ya_music_src} />
            </SubscriptionsWrapper>
          ) : null}
        </Content>
      </Card>
    </Wrapper>
  </Root>
)

export default Hero
