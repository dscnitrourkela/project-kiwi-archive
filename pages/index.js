import Head from 'next/head';
import LandingScreen from '../src/screens/LandingScreen/index';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>HackNITR 2.0 | Virtual Edition</title>
        <meta name="title" content="HackNITR 2.0 | Virtual Edition" />
        <meta
          name="description"
          content="Annual Hackathon at NIT Rourkela aiming to provide student developers, a platform to transform their ideas into prototypes, alongside amazing workshops, sessions and fun mini-events.  Awaiting awesome hackers like you!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://hacknitr.tech/" />
        <meta property="og:title" content="HackNITR 2.0 | Virtual Edition" />
        <meta
          property="og:description"
          content="Annual Hackathon at NIT Rourkela aiming to provide student developers, a platform to transform their ideas into prototypes, alongside amazing workshops, sessions and fun mini-events.  Awaiting awesome hackers like you!"
        />
        <meta property="og:image" content="/images/hacknitr_cover.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://hacknitr.tech/" />
        <meta
          property="twitter:title"
          content="HackNITR 2.0 | Virtual Edition"
        />
        <meta
          property="twitter:description"
          content="Annual Hackathon at NIT Rourkela aiming to provide student developers, a platform to transform their ideas into prototypes, alongside amazing workshops, sessions and fun mini-events.  Awaiting awesome hackers like you!"
        />
        <meta property="twitter:image" content="/images/hacknitr_cover.png" />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <link href="icon-192x192.png" rel="icon" type="image/png" sizes="192x192" />
        <link href="icon-256x256.png" rel="icon" type="image/png" sizes="256x256" />
        <link href="icon-384x384.png" rel="icon" type="image/png" sizes="384x384" />
        <link href="icon-512x512.png" rel="icon" type="image/png" sizes="512x512" />

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />

        <link href="/manifest.json" rel="manifest" />
        <meta name="theme-color" content="#17171D" />
      </Head>
      <LandingScreen />
    </>
  );
}
