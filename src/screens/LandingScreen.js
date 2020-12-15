import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Heading,
  Image,
  Link,
  Text
} from 'theme-ui';
import Meta from '@hackclub/meta';
import Head from 'next/head';
import NextLink from 'next/link';
import Nav from '../components/nav';
import SlideDown from '../components/slide-down';
import FadeIn from '../components/fade-in';
import Icon from '../components/icon';
import Photo from '../components/photo';
import Footer from '../components/footer';
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

const Feature = ({ icon, color, name, desc, children, ...props }) => (
  <Box {...props}>
    {children || (
      <Box
        as="span"
        sx={{
          bg: color,
          borderRadius: 18,
          lineHeight: 0,
          p: 2,
          mb: 1,
          display: 'inline-block',
          transform: ['scale(0.75)', 'none'],
          transformOrigin: 'bottom left',
          boxShadow:
            'inset 2px 2px 6px rgba(255,255,255,0.2), inset -2px -2px 6px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.1), 0 4px 8px rgba(0,0,0,0.1)'
        }}
      >
        <Icon glyph={icon} size={48} />
      </Box>
    )}
    <Box>
      <Heading as="h3" variant="headline" mb={2}>
        {name}
      </Heading>
      <Text
        as="p"
        variant="subtitle"
        sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
      >
        {desc}
      </Text>
    </Box>
  </Box>
);

export default () => (
  <>
    <Meta
      as={Head}
      title="HackNITR"
      description="HackNITR is the flagship Hackathon of NIT Rourkela."
      image="https://cloud-9h1w4lj4d.vercel.app/2020-07-25_52g0nw40p2b00dh39mt93xq5ubku6yaj.jpeg"
    />
    <Nav color={color} dark />
    <Box
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

    <Box
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        height: '100vh',
        // width: '100vw',
        position: 'relative'
      }}
    >
      <Container
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <Text as="p" variant="eyebrow">
          HackNITR
        </Text>
        <Heading as="h2" variant="title">
          Flagship hackathon of{' '}
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
            Labore esse ipsum duis mollit reprehenderit tempor reprehenderit. Ad
            qui aute cillum sunt officia esse irure irure sunt consequat eu
            incididunt voluptate sit. Labore laboris ullamco reprehenderit
            eiusmod ea nostrud ipsum aliquip pariatur nisi tempor labore. Aliqua
            consectetur ipsum fugiat occaecat dolor nostrud incididunt et ex
            consequat dolor consectetur. Enim proident elit amet Lorem officia
            laboris incididunt ea et. Ad voluptate irure nulla laborum.
          </Text>
          <Button
            as="a"
            variant="ctaLg"
            href="/"
            target="_blank"
            rel="noopener"
            sx={{ justifySelf: 'center' }}
          >
            Register now
          </Button>
        </Grid>
      </Container>
    </Box>

    <Box
      as="section"
      sx={{
        // py: [4, 5],
        color: 'white',
        minHeight: '100vh',
        // width: '100vw',
        position: 'relative'
      }}
    >
      <Container
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* <Text as="p" variant="eyebrow">
          HackNITR
        </Text> */}
        <Heading as="h2" variant="title" sx={{ textAlign: 'center' }}>
          Themes
        </Heading>
        <Grid
          pt={[3, 4]}
          pb={[4, 5]}
          gap={[4, 3, 4]}
          columns={[null, 3]}
          sx={{
            textAlign: 'left',
            '> a, > div': {
              borderRadius: 'extra',
              boxShadow: 'elevated',
              px: [3, null, 4],
              py: [4, null, 5]
            },
            span: {
              boxShadow:
                '-2px -2px 6px rgba(255,255,255,0.125), inset 2px 2px 6px rgba(0,0,0,0.1), 2px 2px 8px rgba(0,0,0,0.0625)'
            },
            svg: { fill: 'currentColor' }
          }}
        >
          <Card
            // as="a"
            // href="https://apply.hackclub.com/"
            variant="interactive"
            sx={{
              background:
                'linear-gradient(32deg, rgba(24, 218, 255, 0.9) 0%, rgba(91, 255, 205, 0.9) 100%)',
              color: '#095365'
            }}
          >
            <Feature
              icon="send"
              color="white"
              name="1. Application"
              desc="Start by telling us about your club & who’s leading it."
            />
          </Card>
          <Card
            variant="interactive"
            sx={{
              background:
                'linear-gradient(to bottom, rgba(255, 212, 64, 0.9) 0%, rgba(255, 88, 88, 0.9) 100%)',
              color: '#5d114c',
              svg: { color: 'rgb(255,88,88)' }
            }}
          >
            <Feature
              icon="emoji"
              color="white"
              name="2. Onboarding call"
              desc="Hop on a quick Zoom with someone from Hack Club HQ."
            />
          </Card>
          <Card
            variant="interactive"
            sx={{
              background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
              color: 'white',
              svg: { color: '#fb558e' }
            }}
          >
            <Feature
              icon="event-check"
              color="white"
              name="3. First meeting"
              desc="Schedule your club’s first meeting & get going!"
            />
          </Card>
          <Card
            variant="interactive"
            sx={{
              background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
              color: 'white',
              svg: { color: '#fb558e' }
            }}
          >
            <Feature
              icon="event-check"
              color="white"
              name="3. First meeting"
              desc="Schedule your club’s first meeting & get going!"
            />
          </Card>
          <Card
            variant="interactive"
            sx={{
              background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
              color: 'white',
              svg: { color: '#fb558e' }
            }}
          >
            <Feature
              icon="event-check"
              color="white"
              name="3. First meeting"
              desc="Schedule your club’s first meeting & get going!"
            />
          </Card>
          <Card
            variant="interactive"
            sx={{
              background: 'linear-gradient(-32deg, #6f31b7 14%, #fb558e 82%)',
              color: 'white',
              svg: { color: '#fb558e' }
            }}
          >
            <Feature
              icon="event-check"
              color="white"
              name="3. First meeting"
              desc="Schedule your club’s first meeting & get going!"
            />
          </Card>
        </Grid>
      </Container>
    </Box>

    <Footer dark />
  </>
);
