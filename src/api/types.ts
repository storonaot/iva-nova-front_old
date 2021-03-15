export interface TrackItem {
  id: number
  title: string
  title_eng: string
  audio_src: string
  ordinal_number: number
}

export interface Image {
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
  cover: Image
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

export interface SourseFile {
  id: number
  url: string
}

export interface DocumentItem {
  id: number
  title: string
  title_eng: string
  source_link?: string
  source_file?: SourseFile
}

export interface Contact {
  id: number
  email: string
  phone_number?: string
  photo: Image
  position: string
  position_eng: string
  name: string
  name_eng: string
}
