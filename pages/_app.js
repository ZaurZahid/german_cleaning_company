import Head from 'next/head';

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>T&B Gebäudereinigung</title>
      <meta
        name="description"
        content="Professionelle Gebäudereinigung und Umzugsservice in Deutschland. Sauberkeit, Zuverlässigkeit und faire Preise."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp