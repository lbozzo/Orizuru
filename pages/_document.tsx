import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

function setTheme() {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    const persistedPreference = localStorage.getItem('color-mode');

    let colorMode = 'light';

    const hasUsedToggle = typeof persistedPreference === 'string';

    if (hasUsedToggle) {
        colorMode = persistedPreference;
    } else {
        colorMode = prefersDarkFromMQ ? 'dark' : 'light';
    }
    document.body.className = colorMode;
}

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                )
            };
        } finally {
            sheet.seal();
        }
    }
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/assets/fonts/Inter/static/Inter-Light.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="true"
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/Inter/static/Inter-Regular.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="true"
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/Inter/static/Inter-Medium.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="true"
                    />
                    <link
                        rel="preload"
                        href="/assets/fonts/Inter/static/Inter-Bold.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="true"
                    />
                </Head>
                <body>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `(${String(setTheme)})()`
                        }}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
