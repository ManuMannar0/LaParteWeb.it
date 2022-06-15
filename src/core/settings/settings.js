import { removeAllSpaces } from "core/features/strings"
import { 
    the_blog_protocol, 
    the_blog_domain, 
    the_blog_WPFolder,
    the_blog_menu, 
    the_blog_homeButtonName, 
    the_blog_title, 
    the_blog_description,  
} from "THE_BLOG/THE_BLOG_Settings"

// PATHS
export const homeButtonName = !the_blog_homeButtonName || '' ? 'home' : removeAllSpaces(the_blog_homeButtonName).toLowerCase()
export const baseURL = '/'
export const pathHome = `${baseURL}${homeButtonName}`
export const pathCategory = `${baseURL}category/:categorySlug/:categoryName`
export const pathPage = `${baseURL}page/:pageSlug/:pageIDSlug`
export const pathPost = `${baseURL}post/:postSlug/:postIDSlug`
export const pathCustom = `${baseURL}custom/:customSlug/:customIDSlug`
export const pathHelp = `${baseURL}help/`
// SOURCE
const protocol = !the_blog_protocol || '' ? 'https' : `${the_blog_protocol}://` 
export const domain = !the_blog_domain || '' ? 'localhost:8080' : `${the_blog_domain}/`
// export const domain = !the_blog_domain || '' ? 'localhost:8080' : `www.${the_blog_domain}/`
const WPFolder = !the_blog_WPFolder || '' ? '' : `${the_blog_WPFolder}/`
export const siteURL = `${protocol}${domain}${WPFolder}`
// MENU
export const menu = !the_blog_menu || '' ? 'WPCategoryMenu' : the_blog_menu 
//META
export const title = !the_blog_title || '' ? 'The Blog !' : the_blog_title 
export const description = !the_blog_description || '' ? 'The Blog ! - A project of Emanuele Mancari' : the_blog_description 
