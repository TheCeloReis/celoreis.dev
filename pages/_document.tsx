// typescript _document file
import Document, { Head, Main, NextScript, Html } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <meta name="title" content="Marcelo Reis - Frontend Developer" />
          <meta
            name="description"
            content="Frontend developer, passionate about Javascript, Typescript and React. Living in Belo Horizonte and trying to develop some awesome stuff"
          />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://celoreis.dev/" />
          <meta
            property="og:title"
            content="Marcelo Reis - Frontend Developer"
          />
          <meta
            property="og:description"
            content="Frontend developer, passionate about Javascript, Typescript and React. Living in Belo Horizonte and trying to develop some awesome stuff"
          />
          <meta
            property="og:image"
            content="https://celoreis.dev/img/meta-image.png"
          />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://celoreis.dev/" />
          <meta
            property="twitter:title"
            content="Marcelo Reis - Frontend Developer"
          />
          <meta
            property="twitter:description"
            content="Frontend developer, passionate about Javascript, Typescript and React. Living in Belo Horizonte and trying to develop some awesome stuff"
          />
          <meta
            property="twitter:image"
            content="https://celoreis.dev/img/meta-image.png"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
