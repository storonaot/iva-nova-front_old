import React, { FC } from 'react'

import { GetServerSideProps } from 'next'
import Layout from '../src/components/Layout'
import Contacts from '../src/components/Contacts'
import { fetchDocumentList, fetchContactList } from '../src/api'
import { Contact, DocumentItem } from '../src/api/types'

interface Props {
  documentList: DocumentItem[]
  contactList: Contact[]
}

const ContactsPage: FC<Props> = ({ documentList, contactList }) => (
  <Layout>
    <Contacts documentList={documentList} contactList={contactList} />
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const documentList = await fetchDocumentList()
    const contactList = await fetchContactList()

    return {
      props: { documentList, contactList },
    }
  } catch (error) {
    console.error('error', error.message)
    return {
      props: { documentList: null, contactList: null },
    }
  }
}

export default ContactsPage
