import { Box, Card, Container, Grid, Heading } from 'theme-ui';
import theme from '../../lib/theme';
import Feature from '../../components/feature';

const ThemesSection = () => {
  return (
    <Box
      id="themes-section"
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        minHeight: '100vh',
        height: 'fit-content',
        backgroundColor: theme.colors.dark,
        // width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container>
        <Heading
          as="h2"
          variant="title"
          sx={{ my: [0, 4], textAlign: 'center' }}
        >
          Themes
        </Heading>
        <Grid
          pt={[3, 4]}
          pb={[4, 5]}
          gap={[4, 3, 4]}
          columns={[null, 3]}
          sx={{
            textAlign: 'left',
            mt: [4],
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
              // background:
              //   'linear-gradient(32deg, rgba(24, 218, 255, 0.9) 0%, rgba(91, 255, 205, 0.9) 100%)',
              background: theme.util.gx('#ffffff', '#111111'),
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
  );
};

export default ThemesSection;
