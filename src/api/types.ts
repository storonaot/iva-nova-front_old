export interface TrackItem {
  id: number
  title: string
  title_eng: string
  audio_src: string
  ordinal_number: number
}

export interface Cover {
  id: number
  url: string
}

export interface Album {
  id: number
  title: string
  title_eng: string
  description: string
  description_eng: string
  short_description: string
  short_description_eng: string
  date: Date
  cover: Cover
  tracks: TrackItem[]
  type: 'CD' | 'DVD'
  ya_music_src?: string
  itunes_src?: string
}

export interface City {
  id: number
  title: string
  title_eng: string
}

export interface EventItem {
  id: number
  title: string
  title_eng: string
  date: Date
  place: string
  city: City
  ticket_src?: string
  report_src?: string
}
