import { Box, Container, Grid, Heading, Image, Text } from 'theme-ui';
import theme from '../../lib/theme';
import Feature from '../../components/feature';

const PastSponsorsSection = () => {
  return (
    <Box
      id="pastSponsors-section"
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        minHeight: '100vh',
        backgroundColor: theme.colors.darker,
        // width: '100vw',
        height: 'fit-content',

        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container>
        <Heading
          as="h2"
          variant="title"
          sx={{ textAlign: 'center', marginTop: '4rem' }}
        >
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 2,
              mx: [-2, 0],
              whiteSpace: 'nowrap',
              color: '#5d114c',
              bg: 'rgb(255, 212, 64)'
            }}
          >
            Past Sponsors
          </Text>
        </Heading>
        <Grid
          columns={[2, 4]}
          gap={[4, 4]}
          sx={{ alignItems: 'center', mt: [4], span: { color: 'white' } }}
        >
          <Image
            src="/images/past.png"
            alt="Illustration of Orpheus with a moon"
            // width={512}
          />
          <Image
            src="/images/past1.png"
            alt="Illustration of Orpheus with a moon"
            // width={512}
          />
          <Image
            src="/images/past2.png"
            alt="Illustration of Orpheus with a moon"
            // width={512}
          />
          <Image
            src="/images/past3.png"
            alt="Illustration of Orpheus with a moon"
            // width={512}
          />
          <Image
            src="/images/past4.png"
            alt="Illustration of Orpheus with a moon"
            // width={512}
          />
          <Image
            src="/images/past5.png"
            alt="Illustration of Orpheus with a moon"
            // width={512}
          />
          <Image
            src="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1449831500/fk7egptpbsmzfndtpvvp.png"
            alt="Illustration of Orpheus with a moon"
            // width={512}
          />
          <Image
            src="https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg"
            alt="Illustration of Orpheus with a moon"
            // width={512}
          />
          <Image
            src="/images/past6.png"
            alt="Illustration of Orpheus with a moon"
            // width={512}
          />
          <Image
            src="/images/past7.jpg"
            alt="Illustration of Orpheus with a moon"
            // width={512}
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default PastSponsorsSection;
