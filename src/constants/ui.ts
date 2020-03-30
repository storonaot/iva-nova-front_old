export interface MenuItem {
  source: string
  title: string
}

export const MENU_ITEMS: MenuItem[] = [
  { source: '/schedule', title: 'Афиша' },
  { source: '/news', title: 'Новости' },
  { source: '/about', title: 'О группе' },
  { source: '/music', title: 'Музыка' },
  { source: '/photos', title: 'Фото' },
  { source: '/videos', title: 'Видео' },
  { source: '/contacts', title: 'Контакты' },
]
