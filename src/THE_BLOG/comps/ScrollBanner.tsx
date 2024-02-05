import styled from 'styled-components'

const StyledBanner = styled.div<{
    sec: number
    ismobile: boolean
}>`
    position: fixed;
    bottom: 0px;
    z-index: 2;

    .sliding-text-container {
        background-color: #4c758d8a;
        white-space: nowrap;
        padding: 0.6rem;
    }
    .big-text {
        animation: ${props => `${props.sec}s linear 0s infinite normal none running banner`};
        //font-size: ${props => !props.ismobile && '2.5vw'};
        font-size: ${props => props.ismobile ? '3.5vh' : '2.5vw'};
    }
    span {
        color: white;
    }
    @keyframes banner {
        0% {transform: translateX(0);}
        100% {transform: translateX(-100%);}
    }
`

const ScrollBanner = ({ismobile}: {ismobile: boolean}) => {
    const elements = Array.from({ length: 5 });
    return (
        <StyledBanner 
            id='StyledBanner' 
            sec={ismobile ? 100 : 140}
            ismobile={ismobile}
        >
            <div className="sliding-text-container">
                <div className="big-text">
                    {
                        elements.map((_, index) => (
                            <>
                                <span style={{ opacity: 0 }}>---------------------</span>
                                <span>©2016 LAPARTEWEB</span>
                                <span style={{ opacity: 0 }}>---------------------</span>
                                <a href="https://wa.me/+393791595630" target="_blank" rel="noreferrer">+39 379 159 5630</a>
                                <span style={{ opacity: 0 }}>---------------------</span>
                                <span>P.IVA: 02674160060</span>
                                <span style={{ opacity: 0 }}>---------------------</span>
                                <span>We works with and for creatives</span>
                                <span style={{ opacity: 0 }}>---------------------</span>
                                <a href="mailto:laparteweb@gmail.com" target="_blank">laparteweb@gmail.com</a>
                            </>
                        ))
                    }
                </div>
            </div>
        </StyledBanner>
    )
}

export default ScrollBanner