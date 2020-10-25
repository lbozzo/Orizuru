import 'normalize.css';

import { themeGet } from '@styled-system/theme-get';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import light from 'styles/theme/light';

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: 'Rubik';
        src: url('/assets/fonts/Rubik/static/Rubik-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        
    }
    @font-face {
        font-family: 'Rubik';
        src: url('/assets/fonts/Rubik/static/Rubik-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        
    }

    @font-face {
        font-family: 'Rubik';
        src: url('/assets/fonts/Rubik/static/Rubik-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        
    }
    
    @font-face {
        font-family: 'Rubik';
        src: url('/assets/fonts/Rubik/static/Rubik-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        
    }
    
    html, body {
        font-family: ${themeGet('fonts.sans-serif', 'inherit')}
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
    a,a:visited,a:focus {
        color: inherit;
        text-decoration: none;
    }
`;

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Lucas Bozzo</title>
                <meta
                    name="description"
                    content="Web developer, mobile developer, dreamer and traveller from Panama. Visit my website."
                />
            </Head>
            <ThemeProvider theme={light}>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default MyApp;
