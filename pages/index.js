import Head from 'next/head';
import { Embed } from 'theme-ui';
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
      </Head>
      <LandingScreen />
    </>
  );
}
