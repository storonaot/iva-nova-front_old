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

export interface Member {
  id: number
  full_name: string
  full_name_eng: string
  date_of_birth: string
  specialization: string
  specialization_eng: string
  description: string
  description_eng: string
  is_ex: boolean
  photos: Image[]
  main_photo: Image
  active_periods?: string
  place_of_birth: string
}

export interface MediaLinks {
  itunes_src: string
  ya_music_src: string
}

export interface Socials {
  vk_src: string
  fb_src: string
  youtube_src: string
  insta_src: string
}
export interface About {
  id: number
  description: string
  description_eng: string
  description_short: string
  description_short_eng: string
  history: string
  history_eng: string
  main_photo: Image
  photos: Image[]
  title: string
  title_eng: string
}
