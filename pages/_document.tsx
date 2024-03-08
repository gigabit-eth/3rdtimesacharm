import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://terminal.jup.ag/main-v2.js" />
          <script src="https://terminal.jup.ag/main-v2.js" data-preload />
        </Head>
        <body className="text-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
