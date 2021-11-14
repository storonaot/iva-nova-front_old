import React from 'react'

import Title from '../common/Title'
import NewsList from './List'

import Container from '../common/Container'
import Pagination from '../common/Pagination'
import NewsSectionRoot from '../common/NewsRoot'
import Link from '../common/Link'

import { BackDrop, Modal, ModalTitle } from './styles'

// NOTE: временно
const IVA_NOVA_FACEBOOK_LINK = 'https://www.facebook.com/ivanovaband'

const News = () => {
  return (
    <NewsSectionRoot>
      <BackDrop>
        <Modal>
          <ModalTitle>Данный раздел находится в разработке.</ModalTitle>
          <p>
            С актуальныеми новостями группы вы можете ознакомиться{' '}
            <Link href={IVA_NOVA_FACEBOOK_LINK} isBlank>
              в группе на Facebook
            </Link>
          </p>
        </Modal>
      </BackDrop>
      <Container>
        <Title withMargin>Новости</Title>
        <NewsList />
        <Pagination totalRecords={10} onChange={() => {}} recordsOnPage={10} />
      </Container>
    </NewsSectionRoot>
  )
}

export default News
