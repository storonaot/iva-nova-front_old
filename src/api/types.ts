export interface TrackItem {
  id: number
  name: string
  name_eng: string
  audio_link: string
}

export interface Cover {
  id: number
  url: string
}

export interface Album {
  id: number
  name: string
  name_eng: string
  ya_music_link: string
  itunes_link: string
  description: string
  date: Date
  cover: Cover
  tracks: TrackItem[]
  short_description: string
  short_description_eng: string
  type: 'CD' | 'DVD'
}

export interface City {
  id: number
  name: string
  name_eng: string
}

export interface EventItem {
  id: number
  title: string
  title_eng: string
  date: Date
  place: string
  place_link?: string
  city: City
  ticket_link?: string
  report_link?: string
}
