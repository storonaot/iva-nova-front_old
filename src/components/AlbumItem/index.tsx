/* eslint-disable react/no-danger */
import React from 'react'
import Container from '../common/Container'
import Title from '../common/Title'
import Link from '../common/Link'
import HTMLContent from '../common/HTMLContent'

import { MUSIC_URL } from '../../constants/sources'

import {
  ITunesButton,
  YaMusicButton,
  SubscribeTitle,
  SubscriptionsWrapper,
} from '../common/Subscriptions'

import { Heading } from './styles'

const content = `
<div>
<p>
<b>Ива-Нова:</b>\n
Анастасия Постникова – вокал, аналоговый синтезатор, перкуссия\n
Наталия Потапенко – аккордеон, голос и крики\n
Елена Новикова – бас\n
Екатерина Федорова – барабаны, перкуссия, голос и крики\n
</p>
<p>
<b>Специальный гость:</b>\n
Альберт Кувезин (ТУВА), ЯТ-ХА, горловое пение (10)\n
</p>
<p>
В «Вальсе оглохших под мостами» приняли участие:\n
Михаил Коловский (Санкт-Петерубрг, «АУКЦЫОН») – туба\n
Алексей Иванов (Санкт -Петербург, «Союз коммерческого авангарда», «ФИГС») – монотрон\n
Николай Судник (Санкт-Петербург, «ЗГА») – шум\n
Евгений Зарубицкий (Москва) – вход микшерного пульта\n
Петр Толмачев (Антверпен) – звук «Прислонясь к дверному косяку»\n
Ремко Муерманс (Санкт-Петербург) – электронные глупости\n
Уло Кригул (Таллин) – пианино «Красный Октябрь»\n
Тодор Тодорович (Оснабрюк, «Blues Company») – гитара\n
Арнольд Де Бур (Амстердам, «The Ex», «ZEA») – гитара\n
Грег Жильг (Лион, «Hupwrson Bisous») – виолончель, голос, звуковые эффекты, игрушка\n
Павел Лазарев (Санкт Петербург) – голос\n
Максо Грусевич и Антон Слепаков (Днепропетровск, «Гражданин Топинамбуръ», «Вагоновожатые») – укулеле, перкуссия, микрофоны\n
Пушка Петропавловской крепости в полдень (Санкт-Петербург)\n
Кенар Дастин( Москва) – вокал\n
Екатерина Федорова (Санкт-Петербург) – ванна с водой и чайник\n
Анастасия Постникова (Санкт-Петербург) – звуки улиц Парижа и аэропорта Пулково\n
</p>
<p>
Записано на студии ТМ «Терминал», Санкт-Петербург, 2014\n
Звукорежиссер и продюссер: Ричард Дойч\n
Мастеринг: Грегор «Кекс» Стренг, Soundbakary, Вена\n
</p>
<p>
Художник и дизайнер: Инка Макута\n
Фото: Марина Ерискина\n
Перевод текстов: Юрий Огарев, Полина Гондлях, Александр Голубовский, Эмилия Лосева, Вячеслав Четин\n
</p>
</div>
`

const AlbumItem = () => {
  return (
    <Container>
      <Heading>
        <Title>КРУТИЛА ПИЛА / 2014</Title>
        <Link href={`${MUSIC_URL}`}>Все альбомы</Link>
      </Heading>
      <div>
        <div>Обложка</div>
        <div>Треклист</div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <SubscribeTitle withMargin={false}>Послушать и скачать альбом:</SubscribeTitle>
        <SubscriptionsWrapper>
          <YaMusicButton />
          <ITunesButton />
        </SubscriptionsWrapper>
      </div>
      <HTMLContent htmlString={content} />
      <div>
        <div>треклист</div>
        <div>треклист</div>
      </div>
      <div>
        <div>Другие альбомы</div>
        <div>Слайдер</div>
      </div>
    </Container>
  )
}

export default AlbumItem
