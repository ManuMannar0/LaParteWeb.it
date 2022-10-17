import { the_blog_domain, the_blog_protocol, video_bkg } from "THE_BLOG/THE_BLOG_Settings"
import imgSeo1 from '../imgs/seo.jpg'
import {the_blog_title, the_blog_description} from '../THE_BLOG_Settings'

const HiddenImagesForMeta = () => {
    const video = `${the_blog_protocol}://${the_blog_domain}/${video_bkg}`

    return(
        <>
            <img src={imgSeo1} alt={the_blog_title} style={{display: "none"}} />
        </>
    )
}

export default HiddenImagesForMeta


