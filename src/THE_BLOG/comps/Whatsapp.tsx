import styled from 'styled-components'
import wa from '../imgs/wa.png'

const StyledWhatsapp = styled.a`
    z-index: 1;
    background: #2fc7c2e3;
    display: flex;
    justify-content: center;
    width: 100%;

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

const Whatsapp = () => {
    // const [isVertical, setIsVertical] = useState(false)

    // useEffect(() => {
    //     window.innerWidth/window.innerHeight < 1.25 && setIsVertical(true)
    //     window.innerWidth/window.innerHeight > 1.25 && setIsVertical(false)

    // }, [window.innerWidth, window.innerHeight])

    return(
        <StyledWhatsapp id="Whatsapp" href="https://wa.me/+393770875288" target="_blank" rel="noreferrer">
            <img src={wa} alt="" />
        </StyledWhatsapp>
    ) 
}

export default Whatsapp


