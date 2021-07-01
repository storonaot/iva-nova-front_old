import axios from './axios'
import { Album, City, EventItem, PhotoAlbum, Video } from './types'

export const fetchAlbumList = (paramsString?: string): Promise<Album[]> =>
  axios.get(paramsString ? `/albums?${paramsString}` : '/albums').then(({ data }) => data)
export const fetchAlbum = (id: string | string[]): Promise<Album> =>
  axios.get(`/albums/${id}`).then(({ data }) => data)

export const fetchEventList = (paramsString?: string): Promise<EventItem[]> =>
  axios
    .get(paramsString ? `/events?_sort=date:DESC&${paramsString}` : '/events?_sort=date:DESC')
    .then(({ data }) => data)
export const fetchEventsCount = (paramsString?: string): Promise<number> =>
  axios
    .get(paramsString ? `/events/count?${paramsString}` : '/events/count')
    .then(({ data }) => data)

export const fetchCityList = (paramsString?: string): Promise<City[]> =>
  axios.get(paramsString ? `/cities?${paramsString}` : '/cities').then(({ data }) => data)

// export const fetchTrackList = (paramsString?: string): Promise<TrackItem[]> =>
//   axios.get(paramsString ? `/tracks?${paramsString}` : '/tracks').then(({ data }) => data)

export const fetchDocumentList = (paramsString?: string): Promise<{}> =>
  axios.get(paramsString ? `/documents?${paramsString}` : '/documents').then(({ data }) => data)

export const fetchContactList = (paramsString?: string): Promise<{}> =>
  axios.get(paramsString ? `/contacts?${paramsString}` : '/contacts').then(({ data }) => data)

export const fetchMediaLinks = () => axios.get('/media-links').then(({ data }) => data)

export const fetchSocialNetworks = (paramsString?: string) =>
  axios
    .get(paramsString ? `/social_networks?${paramsString}` : '/social-networks')
    .then(({ data }) => data)

export const fetchAbout = (paramsString?: string) =>
  axios.get(paramsString ? `/about?${paramsString}` : '/about').then(({ data }) => data)

export const fetchMembers = (paramsString?: string) =>
  axios.get(paramsString ? `/members?${paramsString}` : '/members').then(({ data }) => data)

export const fetchMember = (id: string, paramsString?: string) =>
  axios
    .get(paramsString ? `/members/${id}?${paramsString}` : `/members/${id}`)
    .then(({ data }) => data)

export const fetchPhotoAlbums = (paramsString?: string) =>
  axios
    .get<PhotoAlbum[]>(paramsString ? `/photos?${paramsString}` : '/photos')
    .then(({ data }) => data)

export const fetchPhotoAlbum = (id: string | string[], paramsString?: string) =>
  axios
    .get<PhotoAlbum>(paramsString ? `/photos/${id}?${paramsString}` : `/photos/${id}`)
    .then(({ data }) => data)

export const fetchVideos = (paramsString?: string) =>
  axios.get<Video[]>(paramsString ? `/videos?${paramsString}` : `/videos`).then(({ data }) => data)
