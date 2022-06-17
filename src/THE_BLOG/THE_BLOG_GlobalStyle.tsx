import styled, { createGlobalStyle, ThemeProvider} from "styled-components";

/** insert your globa style inside GlobaStyle */
/** when the project is ended, try to remove styledcomponent to check if is real used */

const GlobalStyle = createGlobalStyle<{}>`

    html,body,button,ul,figure,p {
        border: 0;
        margin: 0;
        padding: 0;
    }

    html {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -font-smoothing: antialiased;
        scroll-behavior: smooth;
    }

    a {
        color: inherit;
    }

    h1,h2,h3,h4,h5 {
        padding: 0;
        margin: 0;
    }
    
    //WORDPRESS CLASS STYLE
    .has-text-align-center {
        text-align: center;
    }

    #bgvid {
        object-fit: cover;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
    }
`

// https://loading.io/css/
export const StyledLoadingSpinner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #27272777;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .lds-ripple {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ripple div {
        position: absolute;
        border: 4px solid #fff;
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
    }
    @keyframes lds-ripple {
        0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
        }
        100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
        }
    }
`

export { GlobalStyle }