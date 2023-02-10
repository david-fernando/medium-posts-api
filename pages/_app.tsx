import Head from 'next/head'
import type { AppProps } from 'next/app'

import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Medium Posts API</title>
        <meta name="Medium Posts API" content="Unofficial Medium API that returns the JSON of your posts" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>       
      <Component {...pageProps} />
    </>
  )
}

export default MyApp