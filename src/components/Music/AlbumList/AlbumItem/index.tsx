import React from 'react'
import Link from 'next/link'

import { MUSIC_URL } from '../../../../constants/sources'

interface Props {
  id: number | string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any
  date: number | string
  name: string
  description: string
}

const AlbumItem = ({ id, image, date, name, description }: Props) => (
  <Link href={`${MUSIC_URL}/${id}`}>
    <div>
      <div>
        <div style={{ backgroundImage: image }}>Image</div>
        <div>{description}</div>
      </div>
      <div>{name}</div>
      <div>{date}</div>
    </div>
  </Link>
)

export default AlbumItem
