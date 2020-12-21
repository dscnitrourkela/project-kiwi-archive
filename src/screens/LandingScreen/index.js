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

const LandingScreen = () => {
  return (
    <>
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

export default LandingScreen;
