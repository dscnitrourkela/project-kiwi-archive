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
      </Head>
      <LandingScreen />
    </>
  );
}
