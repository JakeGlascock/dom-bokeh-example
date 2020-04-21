import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps }
  }

  render() {
    const bodyStyle = {
      margin: 0,
      padding: 0,
      border: '0'
    };

    return (
      <Html>
        <Head />
        <body style={bodyStyle}>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;