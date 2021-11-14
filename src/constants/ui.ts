import {
  SCHEDULE_URL,
  NEWS_URL,
  ABOUT_URL,
  MUSIC_URL,
  PHOTOS_URL,
  VIDEOS_URL,
  CONTACTS_URL,
} from './sources'

export interface MenuItem {
  source: string
  title: string
}

export const MENU_ITEMS: MenuItem[] = [
  { source: SCHEDULE_URL, title: 'Афиша' },
  { source: NEWS_URL, title: 'Новости' },
  { source: ABOUT_URL, title: 'О группе' },
  { source: MUSIC_URL, title: 'Музыка' },
  { source: PHOTOS_URL, title: 'Фото' },
  { source: VIDEOS_URL, title: 'Видео' },
  { source: CONTACTS_URL, title: 'Контакты' },
]

export const COLORS = {
  primary: '#C44A16',
  text: '#404040',
  light: '#F7F7F7',
  lightGray: '#E1E1E1',
  secondary: '#E88852',
  lines: '#E3E3E3',
  label: '#9C6D6D',
  gray: '#C3C3C3',
  grayDark: '#565656',
}

// export const DEFAULT_IMAGE_URL =
//   'https://upload.wikimedia.org/wikipedia/ru/2/2a/Adventure_Time_with_Finn_%26_Jake.png'
export const DEFAULT_IMAGE_URL = ''
