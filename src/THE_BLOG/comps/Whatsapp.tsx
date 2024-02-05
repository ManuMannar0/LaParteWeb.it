import styled from 'styled-components'
import wa from '../imgs/wa2.png'

type IWA = {
    ismobile: boolean,
    ispostvisible: boolean
}

const StyledWhatsapp = styled.a<{
    ismobile: boolean
    ispostvisible: boolean
}>`
    /* justify-content: center;
    z-index: 3;
    position: fixed;
    top: ${props => props.ismobile ? '0vw' : '0vw'};
    right: ${props => props.ismobile ? '0vw' : '0vw'};*/
    display: ${props => props.ispostvisible ? 'none' : 'block'}; 

    img{
        width: 4.5vh;
    }
`

const Whatsapp = (props: IWA) => {
    // const [isVertical, setIsVertical] = useState(false)

    // useEffect(() => {
    //     window.innerWidth/window.innerHeight < 1.25 && setIsVertical(true)
    //     window.innerWidth/window.innerHeight > 1.25 && setIsVertical(false)

    // }, [window.innerWidth, window.innerHeight])

    return(
        <StyledWhatsapp id="Whatsapp" href="https://wa.me/+393791595630" target="_blank" rel="noreferrer" ismobile={props.ismobile} ispostvisible={props.ispostvisible}>
            <img src={wa} alt="" />
        </StyledWhatsapp>
    ) 
}

export default Whatsapp


