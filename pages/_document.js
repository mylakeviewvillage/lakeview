import Favicon from 'components/common/Favicon'
import SEO from 'components/common/SEO'
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
                    <Trackers google="UA-117378406-1" facebook="416073699992441" />
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