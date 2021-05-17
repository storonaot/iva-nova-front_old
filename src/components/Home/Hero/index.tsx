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
import { MediaLink, SocialNetworkItem, About } from '../../../api/types'
import { getFullMediaUrl } from '../../../helpers'

interface Props {
  mediaLinkList?: MediaLink[]
  socialNetworkList?: SocialNetworkItem[]
  about?: About | null
}

const Hero: FC<Props> = ({ mediaLinkList, socialNetworkList, about }) => (
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
          {socialNetworkList?.length ? (
            <SocialsRoot>
              <SubscribeTitle>Подписывайтесь на нас!</SubscribeTitle>
              <SocialsWrapper>
                <Socials size={56} padded={false} list={socialNetworkList} />
              </SocialsWrapper>
            </SocialsRoot>
          ) : null}
          {mediaLinkList?.length ? (
            <SubscriptionsWrapper>
              {mediaLinkList.map(mediaLink => {
                if (mediaLink.type === 'iTunes') return <ITunesButton href={mediaLink.link} />
                if (mediaLink.type === 'yaMusic') return <YaMusicButton href={mediaLink.link} />

                return null
              })}
            </SubscriptionsWrapper>
          ) : null}
        </Content>
      </Card>
    </Wrapper>
  </Root>
)

export default Hero
