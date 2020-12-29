import { Box, Container, Grid, Heading, Image, Text, Link } from 'theme-ui';
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
          sx={{
            mt: 4,
            alignItems: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
            alignContent: 'center',
            span: { color: 'white' }
          }}
        >
          <Link href="https://devfolio.co/" target="_blank">
            <Image
              src="/images/past.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://www.jetbrains.com/" target="_blank">
            <Image
              src="/images/past1.png"
              alt="Illustration of Orpheus with a moon"
              sx={{ maxHeight: '10rem' }}
            />
          </Link>
          <Link href="https://www.wolfram.com/language/" target="_blank">
            <Image
              src="/images/past3.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://matic.network/" target="_blank">
            <Image
              src="/images/past4.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://foldapp.com/" target="_blank">
            <Image
              src="/images/past5.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://www.creative-tim.com/" target="_blank">
            <Image
              src="https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1449831500/fk7egptpbsmzfndtpvvp.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://www.digitalocean.com/" target="_blank">
            <Image
              src="https://cdn.worldvectorlogo.com/logos/digitalocean-2.svg"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://www.noticebard.com/" target="_blank">
            <Image
              src="/images/past6.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://www.hackerearth.com/" target="_blank">
            <Image
              src="/images/hackerearth.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://unitechindia.com/" target="_blank">
            <Image
              src="/images/unitech.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://get.tech/" target="_blank">
            <Image
              src="/images/dotTECH.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://www.invisionapp.com/" target="_blank">
            <Image
              src="/images/invision.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://github.com/" target="_blank">
            <Image
              src="/images/github.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
          <Link href="https://challengerocket.com/" target="_blank">
            <Image
              src="/images/crocket.png"
              alt="Illustration of Orpheus with a moon"
              // width={512}
            />
          </Link>
        </Grid>
      </Container>
    </Box>
  );
};

export default PastSponsorsSection;
