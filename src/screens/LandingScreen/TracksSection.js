import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import theme from '../../lib/theme';
// import Icon from '../../components/icon';

const TracksSection = () => {
  return (
    <Box
      id="tracks-section"
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        minHeight: '100vh',
        height: 'fit-content',
        backgroundColor: theme.colors.dark,
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
          TRACKS
        </Heading>
        <Grid
          pt={[3, 4]}
          pb={[4, 5]}
          gap={[4, 2]}
          columns={[1, 2]}
          sx={{
            textAlign: 'left',
            mt: [3]
          }}
        >
          <div className="flip">
            <div
              className="front"
              style={{
                backgroundImage:
                  'url("https://i.ytimg.com/vi/GfaKlCu690E/maxresdefault.jpg")'
              }}
            >
              <Heading
                sx={{
                  position: 'relative',
                  top: '85%',
                  bg: 'rgb(255, 212, 64)',
                  color: '#5d114c',
                  whiteSpace: 'nowrap',
                  borderRadius: '50px'
                }}
              >
                Health
              </Heading>
            </div>
            <div className="back">
              <Heading>Health</Heading>
              <Text sx={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
            </div>
          </div>

          <div className="flip">
            <div
              className="front"
              style={{
                backgroundImage:
                  'url("https://i.ytimg.com/vi/GfaKlCu690E/maxresdefault.jpg")'
              }}
            >
              <Heading
                sx={{
                  position: 'relative',
                  top: '85%',
                  bg: 'rgb(255, 212, 64)',
                  color: '#5d114c',
                  whiteSpace: 'nowrap',
                  borderRadius: '50px'
                }}
              >
                Health
              </Heading>
            </div>
            <div className="back">
              <Heading>Health</Heading>
              <Text sx={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
            </div>
          </div>

          <div className="flip">
            <div
              className="front"
              style={{
                backgroundImage:
                  'url("https://i.ytimg.com/vi/GfaKlCu690E/maxresdefault.jpg")'
              }}
            >
              <Heading
                sx={{
                  position: 'relative',
                  top: '85%',
                  bg: 'rgb(255, 212, 64)',
                  color: '#5d114c',
                  whiteSpace: 'nowrap',
                  borderRadius: '50px'
                }}
              >
                Health
              </Heading>
            </div>
            <div className="back">
              <Heading>Health</Heading>
              <Text sx={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
            </div>
          </div>

          <div className="flip">
            <div
              className="front"
              style={{
                backgroundImage:
                  'url("https://i.ytimg.com/vi/GfaKlCu690E/maxresdefault.jpg")'
              }}
            >
              <Heading
                sx={{
                  position: 'relative',
                  top: '85%',
                  bg: 'rgb(255, 212, 64)',
                  color: '#5d114c',
                  whiteSpace: 'nowrap',
                  borderRadius: '50px'
                }}
              >
                Health
              </Heading>
            </div>
            <div className="back">
              <Heading>Health</Heading>
              <Text sx={{ textAlign: 'justify' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </Text>
            </div>
          </div>
        </Grid>
      </Container>
    </Box>
  );
};

export default TracksSection;
