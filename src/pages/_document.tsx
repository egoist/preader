import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `function addDarkmodeWidget() {
  new Darkmode({label: '🌓',}).showWidget();
}
addDarkmodeWidget();`,
            }}
          ></script>
          <NextScript />
          {process.env.NODE_ENV === 'production' && (
            <script async data-api="/_hive" src="/bee.js"></script>
          )}
        </body>
      </Html>
    )
  }
}

export default MyDocument
