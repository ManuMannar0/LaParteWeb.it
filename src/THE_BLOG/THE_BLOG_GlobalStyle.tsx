import styled, { createGlobalStyle, ThemeProvider} from "styled-components";

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

    body {
        color: white;
        background-color: black;
        font-family: 'IBM Plex Sans', sans-serif;
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

export { GlobalStyle }