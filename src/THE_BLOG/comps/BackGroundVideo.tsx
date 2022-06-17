import video from '../imgs/waves.mp4'

const BackGroundVideo = () => {
    return(
        <video playsInline autoPlay muted loop id="bgvid">
            <source src='https://laparteweb.it/waves.mp4' type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    )
}

export default BackGroundVideo
