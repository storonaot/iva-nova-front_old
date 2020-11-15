/* eslint-disable react/no-danger */
import React from 'react'
import Container from '../common/Container'
import Title from '../common/Title'
import Link from '../common/Link'
import HTMLContent from '../common/HTMLContent'
import AspectRatioImage from '../common/AspectRatioImage'
import Track, { TrackProps } from '../common/Track'

import { MUSIC_URL } from '../../constants/sources'

import {
  ITunesButton,
  YaMusicButton,
  SubscribeTitle,
  SubscriptionsWrapper,
} from '../common/Subscriptions'

import {
  MainHeading,
  ImageWrapper,
  NumericList,
  NumericListItem,
  TrackListWrapper,
  TrackList,
  AlbumInfoWrapper,
  SubscribtionsWrapper,
  ContentWrapper,
} from './styles'
import photo4 from './photo4.jpeg'

const content = `
<div>
  <div><b>Ива-Нова:</b></div>
  <div>Анастасия Постникова – вокал, аналоговый синтезатор, перкуссия</div>
  <div>Наталия Потапенко – аккордеон, голос и крики</div>
  <div>Елена Новикова – бас</div>
  <div>Екатерина Федорова – барабаны, перкуссия, голос и крики</div>
</p>
<p>
  <div><b>Специальный гость:</b></div>
  <div>Альберт Кувезин (ТУВА), ЯТ-ХА, горловое пение (10)</div>
</p>
<p>
  <div>В «Вальсе оглохших под мостами» приняли участие:</div>
  <div>Михаил Коловский (Санкт-Петерубрг, «АУКЦЫОН») – туба</div>
  <div>Алексей Иванов (Санкт -Петербург, «Союз коммерческого авангарда», «ФИГС») – монотрон</div>
  <div>Hиколай Судник (Санкт-Петербург, «ЗГА») – шум</div>
  <div>Евгений Зарубицкий (Москва) – вход микшерного пульта</div>
  <div>Петр Толмачев (Антверпен) – звук «Прислонясь к дверному косяку»</div>
  <div>Ремко Муерманс (Санкт-Петербург) – электронные глупости</div>
  <div>Уло Кригул (Таллин) – пианино «Красный Октябрь»</div>
  <div>Тодор Тодорович (Оснабрюк, «Blues Company») – гитара</div>
  <div>Арнольд Де Бур (Амстердам, «The Ex», «ZEA») – гитара</div>
  <div>Грег Жильг (Лион, «Hupwrson Bisous») – виолончель, голос, звуковые эффекты, игрушка</div>
  <div>Павел Лазарев (Санкт Петербург) – голос</div>
  <div>Максо Грусевич и Антон Слепаков (Днепропетровск, «Гражданин Топинамбуръ», «Вагоновожатые») – укулеле, перкуссия, микрофоны</div>
  <div>Пушка Петропавловской крепости в полдень (Санкт-Петербург)</div>
  <div>Кенар Дастин( Москва) – вокал</div>
  <div>Екатерина Федорова (Санкт-Петербург) – ванна с водой и чайник</div>
  <div>Анастасия Постникова (Санкт-Петербург) – звуки улиц Парижа и аэропорта Пулково</div>
</p>
<p>
  <div>Записано на студии ТМ «Терминал», Санкт-Петербург, 2014</div>
  <div>Звукорежиссер и продюссер: Ричард Дойч</div>
  <div>Мастеринг: Грегор «Кекс» Стренг, Soundbakary, Вена</div>
</p>
<p>
  <div>Художник и дизайнер: Инка Макута</div>
  <div>Фото: Марина Ерискина</div>
  <div>Перевод текстов: Юрий Огарев, Полина Гондлях, Александр Голубовский, Эмилия Лосева, Вячеслав Четин</div>
</p>
</div>
`

const data = {
  id: 1,
  image: photo4,
  date: '2018',
  name: 'Крутила Пила',
  title: 'Студийный альбом, запись студии “Добролет”',
  description:
    'Посвящается мамам... «Счастье - состояние зыбкое, мир - необъятный, но хрупкий. Знакомый, но непостижимый. Сохранить эту тонкую материю - радость. Подарить это волшебное чувство - любовь. Жизнь вокруг начинается с нас. К себе нежно...»',
  content,
  yaMusicLink: '',
  iTunesLink: '',
  trackList: [
    {
      id: 1,
      title: 'Молода (студийная версия, 2012)',
      timeline: '03:21',
      downloaded: 80,
      played: 30,
      isActive: true,
      paused: false,
    },
    {
      id: 2,
      title: 'Когда я пойду ко дну',
      timeline: '03:21',
    },
    {
      id: 3,
      title: 'Хрустальная электричка (Альбом КРУТИЛА ПИЛА 2014)',
      timeline: '03:21',
      downloaded: 80,
    },
    {
      id: 4,
      title: 'Сон (Live in Moscow, 05/02/2016)',
      timeline: '03:21',
      played: 80,
    },
    {
      id: 5,
      title: 'Безнадежный я (Live in Moscow, 05/02/2016)',
      timeline: '03:21',
    },
    {
      id: 6,
      title: 'Сон (Live in Moscow, 05/02/2016)',
      timeline: '03:21',
    },
    {
      id: 11,
      title: 'Молода (студийная версия, 2012)',
      timeline: '03:21',
      downloaded: 80,
      played: 30,
      isActive: true,
      paused: false,
    },
    {
      id: 12,
      title: 'Когда я пойду ко дну',
      timeline: '03:21',
    },
    {
      id: 13,
      title: 'Хрустальная электричка (Альбом КРУТИЛА ПИЛА 2014)',
      timeline: '03:21',
      downloaded: 80,
    },
    {
      id: 14,
      title: 'Сон (Live in Moscow, 05/02/2016)',
      timeline: '03:21',
      played: 80,
    },
    {
      id: 15,
      title: 'Безнадежный я (Live in Moscow, 05/02/2016)',
      timeline: '03:21',
    },
  ],
}

const AlbumItem = () => {
  return (
    <Container>
      <MainHeading>
        <Title isUpCase>
          {data.name} / {data.date}
        </Title>
        <Link href={`${MUSIC_URL}`}>Все альбомы</Link>
      </MainHeading>
      <AlbumInfoWrapper>
        <ImageWrapper>
          <AspectRatioImage image={data.image} aspectRatio="1:1" />
        </ImageWrapper>
        <TrackListWrapper>
          <SubscribeTitle>Треклист</SubscribeTitle>
          <NumericList>
            {data.trackList.map(track => {
              return <NumericListItem key={track.id}>{track.title}</NumericListItem>
            })}
          </NumericList>
        </TrackListWrapper>
      </AlbumInfoWrapper>
      <SubscribtionsWrapper>
        <SubscribeTitle withMargin={false}>Послушать и скачать альбом:</SubscribeTitle>
        <SubscriptionsWrapper>
          <YaMusicButton />
          <ITunesButton />
        </SubscriptionsWrapper>
      </SubscribtionsWrapper>
      <ContentWrapper>
        <HTMLContent
          htmlString={data.content}
          style={{
            fontSize: '0.9em',
          }}
        />
      </ContentWrapper>

      <TrackList>
        {data.trackList.map((track: TrackProps) => (
          <Track key={track.id} track={track} />
        ))}
      </TrackList>
    </Container>
  )
}

export default AlbumItem
