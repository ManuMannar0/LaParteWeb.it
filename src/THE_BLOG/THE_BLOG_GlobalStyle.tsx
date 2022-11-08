import { createGlobalStyle} from "styled-components";
import font from './font/Kamryn3DItalic-JRK6E.ttf';

const GlobalStyle = createGlobalStyle`

    /* 
    @desktopAndTablet = "(min-width: 600px)";
    @tablet: ~"(min-width: 600px) and (max-width: 959px)";
    @tabletAndMobile: ~"(max-width: 959px)";
    @tabletPortrait: ~"(min-width: 600px) and (max-width: 959px) and (orientation:portrait)";
    @tabletLandscape: ~"(min-width: 600px) and (max-width: 959px) and (orientation:landscape)";
    @mobile: ~"(max-width: 599px)";
    @mobilePortrait: ~"(max-width: 599px) and (orientation:portrait)";
    @mobileLandscape: ~"(max-width: 599px) and (orientation:landscape)";
    @desktop: ~"(min-width: 960px)"; 
    */

    #StyledBkgImage {
        @media(min-width: 600px) {
            width: 120%;
            height: unset;
        }
        @media(min-width: 600px) and (max-width: 959px) {
            width: 120%;
            height: unset;
        }
        @media(max-width: 959px) {
            width: 120%;
            height: unset;
        }
        @media(min-width: 600px) and (max-width: 959px) and (orientation:portrait) {
            width: unset;
            height: 120%;
        }
        @media(min-width: 600px) and (max-width: 959px) and (orientation:landscape) {
            width: 120%;
            height: unset;
        }
        @media(max-width: 599px) {
            width: unset;
            height: 120%;
        }
        @media(max-width: 599px) and (orientation:portrait) {
            width: unset;
            height: 120%;
        }
        @media(max-width: 599px) and (orientation:landscape) {
            width: 120%;
            height: unset;
        }
        @media(min-width: 960px) {
            width: 120%;
            height: unset;
        }
    }
    
    @font-face {
        font-family: 'font';
        font-style: normal;
        font-weight: 400;
        src: url(${font});
    }

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

    body {
        color: white;
        background-color: #114b7a;
        font-family: 'Manrope', sans-serif;

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
        filter: opacity(0.5);
    }
`

export { GlobalStyle }