import Nav from '../../components/nav';
import Footer from '../../components/footer';
import Gallery from './gallery'

const color = '#f6f6f6';

const GalleryScreen = () => {
  return (
    <>
      <Nav color={color} dark />

      <Gallery />

      <Footer dark />
    </>
  );
};

export default GalleryScreen;
