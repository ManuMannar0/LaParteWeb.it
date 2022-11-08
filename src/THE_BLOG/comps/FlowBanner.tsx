import styled from 'styled-components'

const StyledLoading = styled.h1<{
    textAlign: string
}>`
    font-family: font;
    text-transform: capitalize;
    text-align: ${props => props.textAlign};
    width: 100vw;
    top: (50% - 1rem);
    position: fixed;
    padding-left: ${props => props.textAlign == 'end' ? '20rem' : '0rem'};

    animation: flowing 16s linear infinite;
    transform: translateX(100%);
    @keyframes flowing {
        100% {
            transform: translateX(-100%);
        }
    }
`

const FlowBanner = ({text}: {text: string}) => {
    return (
        <StyledLoading 
            className="StyledLoading" 
            textAlign="end"
        >
            {text}
        </StyledLoading>
    )
}

export default FlowBanner


