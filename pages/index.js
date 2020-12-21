import Head from 'next/head';
import LandingScreen from '../src/screens/LandingScreen/index';

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>HACKNITR</title>
      </Head>
      <LandingScreen />
    </>
  );
}
