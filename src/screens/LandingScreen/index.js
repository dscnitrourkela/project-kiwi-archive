import Nav from '../../components/nav';
import Footer from '../../components/footer';

import AboutSection from './AboutSection';
import ThemesSection from './ThemesSection';
import FAQSection from './FAQSection';
import SponsorsSection from './SponsorsSection';
import PastSponsorsSection from './PastSponsorsSection';
// import ContactSection from './ContactSection';
import HeroSection from './HeroSection';
import SpeakerSection from './SpeakerSection';
import TracksSection from './TracksSection';
import PrizesSection from './PrizesSection'

const color = '#f6f6f6';

const LandingScreen = () => {
  return (
    <>
      <Nav color={color} dark />

      <HeroSection />
      <AboutSection />
      <ThemesSection />
      <SpeakerSection />
      <TracksSection />
      <PrizesSection />
      <SponsorsSection />
      <PastSponsorsSection />
      <FAQSection />

      <Footer dark />
    </>
  );
};

export default LandingScreen;
