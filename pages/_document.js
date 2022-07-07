import Favicon from 'components/common/Favicon'
import Trackers from 'components/common/Trackers'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en-CA">
                <Head>
                    <Favicon />
                    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument