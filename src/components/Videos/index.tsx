import React from 'react'
// import MediaFullPreview from '../common/MediaFullPreview'
// import { VIDEOS_URL } from '../../constants/sources'

// import videos from './data'

// import SectionRoot from '../common/SectionRoot'

// import bgImage from '../../static/images/bg3.png'
// import Title from '../common/Title'
// import Container from '../common/Container'
// import Tabs from '../common/Tabs'
// import Grid from '../common/Grid'
// import { AspectRatio } from '../common/AspectRatioImage'

// const tabs = [
//   { id: 1, label: 'Все видео' },
//   { id: 2, label: 'Клипы' },
//   { id: 3, label: 'Концертные' },
//   { id: 4, label: 'Эфиры' },
//   { id: 5, label: 'Другое' },
// ]

const Videos = () => {
  return <div>Videos</div>
}

// const Videos = () => {
//   return (
//     <SectionRoot bgImage={bgImage} opacity={0.5}>
//       <Container>
//         <Title withMargin>Фото</Title>
//         <Tabs
//           tabs={tabs}
//           activeTab={1}
//           onChange={tabId => {
//             console.log(tabId)
//           }}
//         />
//         <Grid>
//           {videos.map(video => {
//             return (
//               <MediaFullPreview
//                 key={video.id}
//                 text={video.title}
//                 image={video.image}
//                 aspectRatio={AspectRatio['16:9']}
//                 to={`${VIDEOS_URL}/${video.id}`}
//                 mode="video"
//               />
//             )
//           })}
//         </Grid>
//       </Container>
//     </SectionRoot>
//   )
// }

export default Videos
