import { the_blog_domain, the_blog_protocol, video_bkg } from "THE_BLOG/THE_BLOG_Settings"

const BkgVideo = () => {
    const video = `${the_blog_protocol}://${the_blog_domain}/${video_bkg}`

    return(
        <video playsInline autoPlay muted loop id="bgvid">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default BkgVideo


