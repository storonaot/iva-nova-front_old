import { Dropbox } from 'dropbox'

// TODO: вынести токен в env
const ACCESS_TOKEN = '7zXfMdhhf-kAAAAAAAAAAaJo0z9tx9SBuZGO8dzpDjJxusW_EGWHCmqw9W8fCKnP'

const dbx = new Dropbox({ accessToken: ACCESS_TOKEN })

export default dbx
