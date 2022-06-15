import styled, { createGlobalStyle, ThemeProvider} from "styled-components";

/** insert your globa style inside GlobaStyle */
/** when the project is ended, try to remove styledcomponent to check if is real used */

const GlobalStyle = createGlobalStyle`
    //GENERAL
    // @font-face {
    //     font-family: 'fontTrioMedium';
    //     font-style: normal;
    //     font-weight: 400;
    //     src: url(${fontTrioLicenzaMedium});
    // }

    html,body,button,ul,figure {
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

    section {
    }

    a {
        text-decoration: none;
    }

    h1,h2,h3,h4,h5 {
        padding: 0;
        margin: 0;
    }
    
    //WORDPRESS CLASS STYLE
    .has-text-align-center {
        text-align: center;
    }
`

export { GlobalStyle }