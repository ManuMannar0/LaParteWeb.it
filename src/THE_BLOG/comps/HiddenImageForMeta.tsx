import styled from 'styled-components'
import imgSeo1 from '../imgs/seo.jpg'
import {the_blog_title} from '../THE_BLOG_Settings'

const StyledHiddenImageForMeta = styled.img`
    position: FIXED;
    width: 400%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const HiddenImageForMeta = () => <StyledHiddenImageForMeta src={imgSeo1} alt={the_blog_title} />

export default HiddenImageForMeta


