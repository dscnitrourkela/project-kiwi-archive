import { Box, Button, Container, Grid, Heading, Text, Link } from 'theme-ui';
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
        <Text as="p" variant="eyebrow" sx={{ textAlign: ['center', 'center'] }}>
          HackNITR 2.0
        </Text>
        <Heading
          as="h2"
          variant="title"
          sx={{
            lineHeight: 1.25,
            letterSpacing: '1px',
            textAlign: ['center', 'center']
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
        </Heading>
        <Grid
          // columns={[null, '1fr 2fr']}
          mt={[3, 5]}
          sx={{ maxWidth: 'copyUltra', mx: 'auto' }}
        >
          <Text as="p" variant="lead" sx={{ mt: 0, textAlign: 'center' }}>
            HackNITR 2.0 is one of a kind Hackathon brought to you by OpenCode
            and DSC NIT Rourkela. A unique opportunity to bring out your ideas
            and technological skills to win awesome prizes and swags.
          </Text>

          <Text as="p" variant="lead" sx={{ mt: 0, textAlign: 'center' }}>
            Want to take a workshop or become a student mentor at HackNITR 2.0?
          </Text>
          <Link
            href="https://nitrdevs.typeform.com/to/rVVPYabo"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Button
              variant="ctaLg"
              rel="noopener"
              sx={{ justifySelf: 'center' }}
            >
              Click Here
            </Button>
          </Link>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;
