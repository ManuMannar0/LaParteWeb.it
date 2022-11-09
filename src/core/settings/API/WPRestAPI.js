import { menu, siteURL } from '../settings'

const WPMenuPluginAPI = `wp-json/menus/v1/menus/${menu}`
const WPRestAPIStickyPost = `wp-json/wp/v2/posts?sticky=true`
const WPRestAPIPost = `wp-json/wp/v2/posts/?per_page=100`
const WPRestAPIPages = `wp-json/wp/v2/pages`

export const API_menuRoutes = `${siteURL}${WPMenuPluginAPI}`
export const API_postsArchiveFilteredBySticky = `${siteURL}${WPRestAPIStickyPost}`
export const API_postsArchive = `${siteURL}${WPRestAPIPost}`
export const API_pagesArchive = `${siteURL}${WPRestAPIPages}`