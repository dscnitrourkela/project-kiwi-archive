import Nav from '../../components/nav';
import Footer from '../../components/footer';
import SponsorsSection from './SponsorsSection';
import PastSponsorsSection from './PastSponsorsSection';

const color = '#f6f6f6';

const SponsorScreen = () => {
  return (
    <>
      <Nav color={color} dark />

      <SponsorsSection />
      <PastSponsorsSection />

      <Footer dark />
    </>
  );
};

export default SponsorScreen;
