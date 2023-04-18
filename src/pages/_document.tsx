import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class AppDocument extends Document {
  // Function that collects the necessary styles and styled elements before pre-rendering
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Collect all the styles from the App
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => {
            return (props) => sheet.collectStyles(<App {...props} />);
          },
        });

      const initialProps = await Document.getInitialProps(ctx);

      // Return plain object with styleElements as props to Document
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=grotesk:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=lato:ital,wght@0,300;0,400;0,700;1,300&display=swap"
            rel="stylesheet"
          /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
