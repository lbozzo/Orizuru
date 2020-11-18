import { MDXProvider } from '@mdx-js/react';
import { themeGet } from '@styled-system/theme-get';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';
import { createGlobalStyle } from 'styled-components';

import MDXComponents from '~components/MDXComponents';
import Preflight from '~components/Preflight';
import ThemeProvider from '~components/ThemeContext';

const GlobalStyles = createGlobalStyle` 
    @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/Inter/static/Inter-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/Inter/static/Inter-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }
    
    @font-face {
        font-family: 'Inter';
        src: url('/assets/fonts/Inter/static/Inter-Bold.ttf') format('truetype');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
    html, body {
        font-family: ${themeGet('fonts.sans-serif', 'inherit')};
        color: ${themeGet('colors.gray.800', 'inherit')};
        background-color: ${themeGet('colors.background', 'inherit')};
        transition: background-color 450ms ease;
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
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <ThemeProvider>
                <MDXProvider components={MDXComponents}>
                    <Preflight />
                    <GlobalStyles />
                    <Component {...pageProps} />
                </MDXProvider>
            </ThemeProvider>
        </>
    );
};

export default MyApp;
