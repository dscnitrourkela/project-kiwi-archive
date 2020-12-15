import { Box, Container, Heading, Image } from 'theme-ui';

import SlideDown from '../../components/slide-down';

import { keyframes } from '@emotion/core';

const floating = keyframes`
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(-20px);
  }
`;

// (msw) Credit for this totally goes to https://codepen.io/WebSonick/pen/vjmgu
const twinkling = keyframes`
  from { background-position: 0 0; }
  to { background-position: -10000px 5000px; }
`;

const color = '#50E3C2';

const HeroSection = () => {
  return (
    <Box
      id="hero-section"
      as="main"
      sx={{
        pt: [5, 6],
        pb: 5,
        bg: 'dark',
        color: 'muted',
        textAlign: 'center',
        height: '100vh',
        width: '100vw',
        backgroundImage:
          'url(https://cloud-8j1jfvspm.vercel.app/2020-07-24_stars.svg)',
        backgroundSize: '512px auto'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          display: 'block',
          background:
            'transparent url(https://cloud-c5tvihg15.vercel.app/2020-07-24_afnkcwju2hfkbrkc1ee0h5a5y72a2r5f.png) repeat top center',
          animation: `${twinkling} 200s linear infinite`
        }}
      ></Box>
      <SlideDown
        variant="layout.narrow"
        duration={768}
        sx={{ position: 'relative' }}
      >
        <Heading
          as="h1"
          variant="ultratitle"
          mt={3}
          sx={{
            color,
            textTransform: 'uppercase',
            WebkitTextStroke: 'white',
            WebkitTextStrokeWidth: '2px',
            WebkitTextFillColor: 'transparent',
            filter: `drop-shadow(0 0 1px ${color}) drop-shadow(0 0 2px ${color}) drop-shadow(0 0 6px ${color})`
          }}
        >
          HACKNITR 2.0
        </Heading>
        {/* <Text as="p" variant="subtitle">
            HACKNITR is the flagship hackathon of NIT Rourkela.
        </Text> */}
        {/* <Text as="p" variant="subtitle">
          Join in Saturday at 8:30 PM ET on{' '}
          <NextLink href="/slack" passHref>
            <Link sx={{ color, opacity: 0.75 }}>#hack-night</Link>
          </NextLink>
          !
        </Text> */}
      </SlideDown>
      <Container
        variant="narrow"
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 512,
          minHeight: 512,
          mx: 'auto',
          mt: [4, 5],
          img: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            maxWidth: '100%'
          }
        }}
      >
        <Image
          src="/images/undraw2.svg"
          alt="Illustration of Orpheus with a moon"
          width={512}
          sx={{
            zIndex: 1,
            animation: `${floating} cubic-bezier(.55,.03,.43,.98) 8s infinite alternate`
          }}
        />
      </Container>
    </Box>
  );
};

export default HeroSection;
