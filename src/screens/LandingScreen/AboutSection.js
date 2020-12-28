import { Box, Button, Container, Grid, Heading, Text } from 'theme-ui';
import { Link } from 'react-scroll';
import theme from '../../lib/theme';

const AboutSection = () => {
  return (
    <Box
      id="about-section"
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        minHeight: '100vh',
        // width: '100vw',
        height: 'fit-content',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.darker
      }}
    >
      <Container>
        <Text as="p" variant="eyebrow" sx={{ textAlign: ['center', 'left'] }}>
          HackNITR 2.0
        </Text>
        <Heading
          as="h2"
          variant="title"
          sx={{
            lineHeight: 1.25,
            letterSpacing: '1px',
            textAlign: ['center', 'left']
          }}
        >
          Flagship hackathon of{' '}
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 2,
              mx: [0, 0],
              whiteSpace: 'nowrap',
              color: '#5d114c',
              bg: 'rgb(255, 212, 64)'
            }}
          >
            NIT Rourkela
          </Text>
          .
        </Heading>
        <Grid
          // columns={[null, '1fr 2fr']}
          mt={[3, 5]}
          sx={{ maxWidth: 'copyUltra', mx: 'auto' }}
        >
          {/* <Heading as="h3" variant="headline" sx={{ fontSize: [4, 5], mb: 0 }}>
            Go beyond club meetings.
          </Heading> */}
          {/* <Text
            as="p"
            variant="lead"
            sx={{ mt: 0, a: { variant: 'styles.a', color: 'blue' } }}
          >
            Hack Clubs attend and run{' '}
            <a href="https://hackathons.hackclub.com/">hackathons</a> like{' '}
            <a href="https://windyhacks.com">Windy&nbsp;City&nbsp;Hacks</a> &{' '}
            <a href="https://www.sfchronicle.com/bayarea/article/Hack-the-Fog-makes-history-as-San-12729895.php">
              Hack the Fog
            </a>
            , run summer programs like{' '}
            <a href="http://thecspn.com/?p=43434">Hack Camp</a>, and compete in
            events like the{' '}
            <a href="http://www.congressionalappchallenge.us">
              Congressional App Challenge
            </a>
            . The&nbsp;hack’s the limit.
          </Text> */}
          <Text as="p" variant="lead" sx={{ mt: 0, textAlign: 'center' }}>
            HackNITR 2.0 is one of a kind Hackathon brought to you by OpenCode and
            DSC NIT Rourkela. A unique opportunity to bring out your ideas and
            technological skills to win awesome prizes and swags.
          </Text>
          <Button variant="ctaLg" rel="noopener" sx={{ justifySelf: 'center' }}>
            <Link to="contact-section" smooth offset={-50}>
              Subscribe for updates
            </Link>
          </Button>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
