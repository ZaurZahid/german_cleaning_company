import Head from "next/head";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>T&B Gebäudereinigung</title>
      <meta
        name="description"
        content="Professionelle Gebäudereinigung und Umzugsservice in Deutschland. Sauberkeit, Zuverlässigkeit und faire Preise."
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="T&B Gebäudereinigung" />
      <link rel="canonical" href="https://tb-gebaeudereinigung.de" />{" "}
      {/* need to change */}
      {/* Open Graph (for Facebook, WhatsApp, etc.) */}
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="T&B Gebäudereinigung | Professionelle Reinigungsdienste"
      />
      <meta
        property="og:description"
        content="Zuverlässige Reinigungs- und Umzugsdienste. Kontaktieren Sie T&B Gebäudereinigung für makellose Ergebnisse."
      />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:url" content="https://tb-gebaeudereinigung.de" />{" "}
      {/* need to change */}
      <meta property="og:locale" content="de_DE" />
      {/* Theme & App */}
      <meta name="theme-color" content="#0d9488" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
