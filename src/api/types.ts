export interface Track {
  id: number
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
  tracks: Track[]
  short_description: string
  short_description_eng: string
  type: 'CD' | 'DVD'
}
