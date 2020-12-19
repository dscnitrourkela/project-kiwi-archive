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
import theme from '../../lib/theme';
import Feature from '../../components/feature';
import Accordion from '../../components/accordion';

let data = [
  {
    title: 'Commodo ullamco veniam ut officia sunt irure?',
    content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur.`,
    height: '200px'
  },
  {
    title: 'Irure magna proident et consequat velit ipsum eiusmod?',
    content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur.`,
    height: '200px'
  },
  {
    title: 'Culpa enim ex consectetur aliquip nisi?',
    content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam.`,
    height: '100px'
  },
  {
    title: 'Ea aute anim culpa tempor dolore sit veniam excepteur?',
    content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur.`,
    height: '200px'
  },
  {
    title: 'Nostrud fugiat consequat elit esse?',
    content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur.`,
    height: '200px'
  }
];

const FAQSection = () => {
  return (
    <Box
      id="faq-section"
      as="section"
      sx={{
        py: [4, 5, 6],
        color: 'white',
        minHeight: '100vh',
        backgroundColor: theme.colors.darker,
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container
        sx={{
          // maxWidth: [null, 'copyUltra'],
          svg: { filter: 'drop-shadow(0 2px 3px rgba(0,0,0,.125))' }
        }}
      >
        <Box as="header" sx={{ textAlign: ['center'], pb: [4, 5] }}>
          <Heading as="h2" variant="title">
            FAQ
          </Heading>
        </Box>
        <Grid
          columns={[null, 2]}
          gap={[4, 6]}
          sx={{ alignItems: 'center', span: { color: 'white' } }}
        >
          <Image
            src="/images/image2.svg"
            alt="Illustration of Orpheus with a moon"
            // width={512}
          />
          <Accordion data={data} />
        </Grid>
        <Feature
          icon="welcome"
          color="rgb(255,88,88)"
          name="Have more question?"
          desc={
            <>
              Feel free to reach out to us at{' '}
              <a href="https://google.com">google.com</a>
            </>
          }
          as="aside"
          sx={{
            display: 'grid',
            gridGap: [0, 4],
            gridTemplateColumns: [null, 'auto 1fr'],
            alignItems: 'start',
            justifyContent: 'start',
            bg: 'rgba(255,88,88,0.125)',
            mt: [4, 5],
            p: [3, 4],
            borderRadius: 'extra',
            span: { transform: 'none', width: 'min-intrinsic' },
            svg: { color: 'white' }
          }}
        />
      </Container>
    </Box>
  );
};

export default FAQSection;
