// export interface TrackItem {
//   id: number
//   title: string
//   audio_src: string
//   ordinal_number: number
// }

export interface Image {
  id: number
  url: string
}

export interface Album {
  id: number
  title: string
  description: string
  short_description: string
  date: Date
  cover: Image
  // tracks: TrackItem[]
  type: 'CD' | 'DVD'
  ya_music_src?: string
  itunes_src?: string
  dropbox_src?: string
}

export interface City {
  id: number
  title: string
}

export interface EventItem {
  id: number
  title: string
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
  source_link?: string
  source_file?: SourseFile
}

export interface Contact {
  id: number
  email: string
  phone_number?: string
  photo: Image
  position: string
  name: string
}

export interface Member {
  id: number
  full_name: string
  date_of_birth: string
  specialization: string
  description: string
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
  description_short: string
  history: string
  main_photo: Image
  photos: Image[]
  title: string
}

export interface PhotoAlbum {
  id: number
  cover: Image
  title: string
  date: Date
  description: string
  dropbox_src: string
}
