import React, { FC } from 'react'
import SectionRoot from '../common/SectionRoot'
import Container from '../common/Container'

import bgImage from '../../static/images/bg2.jpg'

import cuttlefish from '../../static/images/cuttlefish.png'
import { DocumentItem, Contact } from '../../api/types'

import Title from '../common/Title'
import { Subtitle, ContactsBlock, DocumentTitle, DocumentWrapper, Link } from './styles'
import ContactItem from './ContactItem'
import { getFullMediaUrl } from '../../helpers'

interface Props {
  documentList: DocumentItem[]
  contactList: Contact[]
}

const Contacts: FC<Props> = ({ documentList, contactList }) => {
  return (
    <SectionRoot bgImage={bgImage} bgRepeat="x">
      <Container>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
          }}
        >
          <img src={cuttlefish} alt="cuttlefish" />
          <div>
            <ContactsBlock>
              <Title withMargin>Контакты</Title>
              <Subtitle>По всем вопросам обращаться сюда:</Subtitle>
              {contactList.map(contact => {
                return (
                  <ContactItem
                    key={contact.id}
                    photo={contact.photo}
                    name={contact.name}
                    position={contact.position}
                    phoneNumber={contact.phone_number}
                    email={contact.email}
                  />
                )
              })}
            </ContactsBlock>

            <div>
              <Title withMargin>Медиа</Title>
              {documentList.map(document => {
                return document.source_link || document.source_file?.url ? (
                  <DocumentWrapper key={document.id}>
                    <DocumentTitle>{document.title}</DocumentTitle> -{' '}
                    <Link
                      target="_blank"
                      rel="norefferer"
                      href={document.source_link || getFullMediaUrl(document.source_file?.url)}
                    >
                      Скачать
                    </Link>
                  </DocumentWrapper>
                ) : null
              })}
            </div>
          </div>
        </div>
      </Container>
    </SectionRoot>
  )
}

export default Contacts