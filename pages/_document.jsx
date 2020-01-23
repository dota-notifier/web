import Document, { Head, Main, NextScript } from 'next/document'
import React from 'react'

class Doc extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="description"
            content="Dota Notifier sends you push notifications when a ready check is trigger or a match is found"
          />
          <title>Dota Notifier</title>
        </Head>
        <body className="bg-primary text-white font-sans cursor-default outline-none">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Doc
