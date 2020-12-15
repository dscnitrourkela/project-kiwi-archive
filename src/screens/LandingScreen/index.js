import Meta from '@hackclub/meta';
import Head from 'next/head';
import Nav from '../../components/nav';
import Footer from '../../components/footer';

import AboutSection from './AboutSection';
import ThemesSection from './ThemesSection';
import FAQSection from './FAQSection';
import SponsorsSection from './SponsorsSection';
import PastSponsorsSection from './PastSponsorsSection';
import ContactSection from './ContactSection';
import HeroSection from './HeroSection';

const color = '#50E3C2';

export default () => {
  return (
    <>
      <Meta
        as={Head}
        title="HackNITR"
        description="HackNITR is the flagship Hackathon of NIT Rourkela."
        image="https://cloud-9h1w4lj4d.vercel.app/2020-07-25_52g0nw40p2b00dh39mt93xq5ubku6yaj.jpeg"
      />
      <Nav color={color} dark />

      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <FAQSection />
      <SponsorsSection />
      <PastSponsorsSection />
      <ContactSection />

      <Footer dark />
    </>
  );
};
