import 'tailwindcss/tailwind.css';
import 'styles/global.css';

import { MDXProvider } from '@mdx-js/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { FC } from 'react';

import MDXComponents from '~components/MDXComponents';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Lucas Bozzo</title>
                <meta
                    name="description"
                    content="Software Developer from Panama, living in London."
                />
            </Head>

            <MDXProvider components={MDXComponents}>
                <Component {...pageProps} />
            </MDXProvider>
        </>
    );
};

export default MyApp;
