/* eslint-disable react/no-danger */
import React from 'react'
import Container from '../common/Container'
import Title from '../common/Title'

const content = `
<div><p>

Dear all!
We were hoping till the last moment that our European tour will take place in May. Sadly need to admit - it won't happen. We are rescheduling the gigs for May 2021. And we are still praying that with all efforts that the world is doing now to stop pandemia, we will all meet at some summer festivals and celebrate the life!
Nowadays we should stay concious and #stayhome.
It is not easy time for everyone now. For us as musicians cancellation of the big tour means no money income.
No... at all. So we would like to propose to all who wish to support us these days:
- visite our bandcamp page and buy some music! To listen music, dance and sing with us is a good way to boost your mood and immune system! 💃🕺
Why bandcamp? Because this friendly platform temporary stop the comission for their services. So the bands can recieve all that you pay. Generous gesture!
UPDATE!
Finally we found out that it was free of charge only one day on March 20... We still need to pay 15% charge from each thing that you buy on our bandcamp page but it is already much better then itunes etc...
For now we have only 2 last albums available to buy but our 3d album Chemodan is on it's way! We'll upload it today.
Stay tuned! Stay healthy!
We'll get over it!
🧡


</p><a href="https://ivanovaband.bandcamp.com/">https://ivanovaband.bandcamp.com/</a></div>`

const NewsItem = () => {
  return (
    <Container>
      <Title withMargin>March 21 at 3:29 PM </Title>
      <div>
        <div>{'<'} Предыдущая</div>
        <div>Следующая {'>'}</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  )
}

export default NewsItem
