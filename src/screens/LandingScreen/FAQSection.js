import {
  Box,
  Container,
  Grid,
  Heading,
  Image
} from 'theme-ui';
import theme from '../../lib/theme';
import Feature from '../../components/feature';
import Accordion from '../../components/accordion';

let data = [
  {
    title: 'What is a Hackathon? How different is Online Hackathon?',
    content: `A hackathon is a coding marathon where you build something with tech by working with people. It isn’t about hacking into a system, it is about hacking something together, It is about learning a great deal and creating something exciting in the process. Online Hackathons are held remotely unlike a traditional in-person, rest all are the same for both.`
  },
  {
    title: 'When will the registrations start?',
    content: `The registrations have already started, Register for the hackathon at hacknitr.tech .`
  },
  {
    title: 'When is the last date to register?',
    content: `You can register for HackNITR 2.0 all the way till March 19, 2021. However, we encourage you to register earlier to participate in workshops, mini-events and other activities`
  },
  {
    title: 'Who can participate?',
    content: `Everyone is welcome to apply, any student developer, designer, professionals or creative individuals, who are passionate about creating to join. If you can innovate, you are eligible.`
  },
  {
    title: 'How does the application process work?',
    content: `We're looking for people who can innovate and build solutions to real-world problems. Tell us why you want to be a part of HackNITR 2.0, any accomplishments you're proud of or anything else which could strengthen your application. Applications are open now.`
  },
  {
    title: "What if I don't have a team or idea?",
    content: `Interest in learning and working with technology is much more important. We'll have a team formation and ideation events geared towards helping you find people to work with. Just fill out the application form`
  },
  {
    title: 'How do I work with my team?',
    content: `One of the biggest challenges of an online hackathon is internal communication with your team. We have a Discord Server where one can find all the everyone from organizers to participants.`
  },
  {
    title: 'Do I need to be a student?',
    content: `Absolutely not! The team behind HackNITR is made up of students, however anyone age 13 and above can give it a go!`
  },
  {
    title: 'Where can I find updates?',
    content: `We have an active Discord for communication, along with we will be reaching out to you via mail. So keep checking your inbox for regular updates.`
  },
  {
    title: 'What if my project is unfinished ? Can I submit an incomplete project?',
    content: `Unfinished or unimpressive (so you think) projects should be presented anyway! Presenting your hack gives you a chance to be proud of what you’ve done, and a constructive perspective of where you should be headed next.`
  },
  {
    title: 'What if I haven’t been to a Hackathon before?',
    content: `Don’t be intimidated, we're so glad to host the first ever hackathon you’re attending, while it’s helpful to have some programming or technical experience, but it’s not a requirement. We’ll have talks, mentors and workshops to help you with your project.`
  }
];

const FAQSection = () => {
  return (
    <Box
      id="faq-section"
      as="section"
      sx={{
        py: [4, 4, 5],
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
            alt="FAQ Image"
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
