import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import LandingScreen from '../src/screens/LandingScreen';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      {/* <Header /> */}
      <LandingScreen />
      {/* <Footer /> */}
    </>
  );
}
