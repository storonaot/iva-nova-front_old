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
