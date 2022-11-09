import { useEffect, useState } from 'react'
import styled from 'styled-components'
import imgSeo1 from '../imgs/seo.jpg'
import {the_blog_title} from '../THE_BLOG_Settings'

const StyledBkgImage = styled.img<{isvertical: boolean}>`
    position: fixed;
    top: 0%;
    width: ${props => props.isvertical ? 'unset' : '120%'};
    height: ${props => props.isvertical ? '100%' : 'unset'};
`

const BkgImage = () => {
    const [isVertical, setIsVertical] = useState(false)

    useEffect(() => {
        window.innerWidth/window.innerHeight < 1.25 && setIsVertical(true)
        window.innerWidth/window.innerHeight > 1.25 && setIsVertical(false)

    }, [window.innerWidth, window.innerHeight])

    return(
        <StyledBkgImage 
            id="StyledBkgImage"
            src={imgSeo1} 
            alt={the_blog_title} 
            isvertical={isVertical}
        />
    )
}

export default BkgImage


