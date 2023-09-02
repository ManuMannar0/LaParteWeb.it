import styled from 'styled-components'
import mail from '../imgs/mail.png'

const StyledMail = styled.a`
    z-index: 1;
    right: 1rem;
    position: absolute;
    top: 1rem;
    
    img{
        width: 3rem;
        filter: invert(1);
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

const Mail = () => {
    // const [isVertical, setIsVertical] = useState(false)

    // useEffect(() => {
    //     window.innerWidth/window.innerHeight < 1.25 && setIsVertical(true)
    //     window.innerWidth/window.innerHeight > 1.25 && setIsVertical(false)

    // }, [window.innerWidth, window.innerHeight])

    return(
        <StyledMail id="Mail" href="mailto:laparteweb@gmail.com" target="_blank" rel="noreferrer">
            <img src={mail} alt="mail" />
        </StyledMail>
    ) 
}

export default Mail


