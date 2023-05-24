import { SET_ISPOSTVISIBLE } from 'THE_BLOG/store/homepage/actions'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import $ from 'jquery';

const StyledMenuButton = styled.button`
    z-index: 1;
    background: black;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 3rem;
    height: 3rem;
    transform: rotate(270deg);
    right: 1rem;
    top: 1rem;
    border-radius: 54px;
    box-shadow: 0px 0px 20px 6px #00000094;

    animation-name: backgroundColorPalette;
	animation-duration: 8s;
	animation-iteration-count: infinite;
	animation-direction: alternate;
	animation-timing-function: linear; 

    img{
        width: 3.5rem;
    }

    @keyframes backgroundColorPalette {
	0% {
		background: #ee6055;
	}
	25% {
		background: #60d394;
	}
	50% {
		background: #aaf683;
	}
	75% {
		background: #ffd97d;
	}
	100% {
		background: #ff9b85;
	}
}
`

const MenuButton = () => {
    const dispatch = useDispatch()
    
    const toggleClick = () => {
        $(`body`).css("overflow", "hidden")
        dispatch(SET_ISPOSTVISIBLE(true))
    }

    // dispatch(SET_BKGCOLOR(props.bkgColor ? props.bkgColor : 'default'))


    // const [isVertical, setIsVertical] = useState(false)

    // useEffect(() => {
    //     window.innerWidth/window.innerHeight < 1.25 && setIsVertical(true)
    //     window.innerWidth/window.innerHeight > 1.25 && setIsVertical(false)

    // }, [window.innerWidth, window.innerHeight])

    return(
        <StyledMenuButton 
            id="StyledMenuButton" 
            onClick={() => toggleClick()}
        />
    ) 
}

export default MenuButton


