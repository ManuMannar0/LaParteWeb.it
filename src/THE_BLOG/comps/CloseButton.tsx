import styled from 'styled-components'

const StyledCloseButtonContainer = styled.div<{
    ismobile: boolean
}>`
    display: flex;
    justify-content: center;
    padding-top: ${props => props.ismobile ? 'unset' : '4rem'};
    position: ${props => props.ismobile ? 'fixed' : 'unset'};
    top: ${props => props.ismobile ? '3vw' : 'unset'};
    right: ${props => props.ismobile ? '3vw' : 'unset'};
`
const StyledCloseButton = styled.button<{
    ismobile: boolean
}>`
    width: ${props => props.ismobile ? '8.5vw' : '3.5vw'};
    height: ${props => props.ismobile ? '8.5vw' : '3.5vw'};
    border-radius: 50%;
    border: 2px solid black;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
`
const Line = styled.span<{
    degrees: number
}>`
  position: absolute;
  height: 2px;
  width: 60%; 
  background-color: black;
  transform: ${props => `rotate(${props.degrees}deg)`};
`;

const CloseButton = ({ismobile}: {ismobile: boolean}) => {
    return (
        <StyledCloseButtonContainer id='StyledCloseButtonContainer' ismobile={ismobile}>
            <StyledCloseButton id='StyledCloseButton' ismobile={ismobile}>
                <Line degrees={45} />
                <Line degrees={-45} />
            </StyledCloseButton>
        </StyledCloseButtonContainer>
    )
}

export default CloseButton