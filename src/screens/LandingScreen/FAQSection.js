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
    title: 'Who can participate?',
    content: `Everyone is welcome to apply, any student developer, designer, professionals or creative individuals, who are passionate about creating to join. If you can innovate, you are eligible.`
  },
  {
    title: 'How does the application process work?',
    content: `We're looking for people who can innovate and build solutions to real-world problems. Tell us why you want to be a part of HackNITR, any accomplishments you're proud of or anything else which could strengthen your application. Applications open in mid January.`
  },
  {
    title: 'Can we apply as a team?',
    content: `Yes! No one likes to be a loner. You can join or create a team once you've started an individual application. You can form team of up to 3 people. Most people aim to have a mix of people with both design and developer skills.`
  },
  {
    title: 'What if I don\'t have a team or idea?',
    content: `Interest in learning and working with technology is much more important. We'll have a team formation and ideation events geared towards helping you find people to work with. Just fill out the application form.`
  },
  {
    title: 'When will the applications open?',
    content: `Applications will start soon on our website. Please subscribe below to stay updated.`
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
              <a href="mailto:organiser@hacknitr.tech">organiser@hacknitr.tech</a>
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
