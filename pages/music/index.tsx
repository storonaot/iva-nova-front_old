import React from 'react'

const MusicPage = () => {
  return <div>MusicPage</div>
}

export default MusicPage

// // @ts-nocheck

// import React, { FC } from 'react'
// // import { GetServerSideProps } from 'next'
// import { fetchAlbumList } from '../../src/api'
// import { Album } from '../../src/api/types'
// import Music from '../../src/components/Music'

// interface Props {
//   list: Album[]
// }

// const MusicPage: FC<Props> = ({ list }) => list && <Music list={list} />

// // export const getServerSideProps: GetServerSideProps = async () => {
// //   try {
// //     const data = await fetchAlbumList('_sort=date:DESC')

// //     return {
// //       props: { list: data },
// //     }
// //   } catch (err) {
// //     console.error('error', err.message)

// //     return {
// //       props: { list: [] },
// //     }
// //   }
// // }

// export const getStatisProps = async () => {
//   const data = await fetchAlbumList('_sort=date:DESC')

//   return {
//     props: { list: data },
//   }
// }

// export default MusicPage
