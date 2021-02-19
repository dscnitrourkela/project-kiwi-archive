import {
  Button,
  Box,
  Grid,
  Container,
  Text,
  Heading,
  Image,
  Link,
  Card
} from 'theme-ui';
import theme from '../../lib/theme';
import Icon from '../../components/icon';

const Service = ({ href, title, icon, size, ...props }) => (
  <Link
    target="_blank"
    rel="noreferrer"
    href={href}
    title={title}
    children={<Icon glyph={icon} size={size} />}
    {...props}
  />
);

const SpeakerSection = () => {
  return (
    <Box
      id="speaker-section"
      as="section"
      sx={{
        color: 'white',
        minHeight: '100vh',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.colors.darker
      }}
    >
      <Container>
        <Heading
          as="h2"
          variant="title"
          sx={{ textAlign: 'center', mb: [5, 6], mt: [5, 5] }}
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
            Speakers
          </Text>
        </Heading>

        <Grid
          columns={[1, 2]}
          gap={5}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            mb: [5, 6]
          }}
        >
          <Container
            sx={{
              maxWidth: ['400px', '600px'],
              cursor: 'pointer',
              margin: '0 auto',
              width: 'fit-content',
              padding: '0',
              borderRadius: '100px',
              transition: 'transform .5s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
                boxShadow: '2px 2px 10px #000',
                borderRadius: '10px'
              }}
            >
              <Image
                sx={{
                  objectFit: 'cover',
                  borderRadius: ['10px 10px 0 0', '10px 0 0 10px']
                }}
                src="/images/Speakers/Juan.jpg"
              />
              <Box
                sx={{
                  color: '#8492A6',
                  background: '#252429',
                  minWidth: ['200px', '300px'],
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  borderRadius: ['0 0 10px 10px', '0 10px 10px 0']
                }}
              >
                <Heading
                  sx={{
                    textAlign: 'left',
                    pt: ['0.7rem', '1.5rem'],
                    pb: [1, 1],
                    fontSize: [2, 3],
                    color: '#fff'
                  }}
                >
                  Juan Pablo Flores
                </Heading>
                <Heading
                  sx={{
                    textAlign: 'left',
                    fontSize: '16px',
                    pb: [1, 3],
                    fontWeight: '400',
                    color: '#fff'
                  }}
                >
                  Student Program Manager, Github Education
                </Heading>
                <Text
                  sx={{
                    textAlign: 'left',
                    fontSize: '14px',
                    pt: [1, 2],
                    pb: [1, 3]
                  }}
                >
                  Juan is a Program Manager at the GitHub Education Team, where
                  he supports student leaders to build and grow local technical
                  communities in their schools.
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    paddingBottom: ['0.6rem', '1rem'],
                    paddingTop: '5px'
                  }}
                >
                  <Service
                    href="https://twitter.com/juanpflores_"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="twitter"
                    title="Juan on Twitter"
                  />

                  <Service
                    href="https://github.com/juanpflores"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      pl: '1rem',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="github"
                    title="Juan on GitHub"
                  />
                </Box>
              </Box>
            </Box>
          </Container>

          <Container
            sx={{
              maxWidth: ['400px', '600px'],
              cursor: 'pointer',
              margin: '0 auto',
              width: 'fit-content',
              padding: '0',
              borderRadius: '100px',
              transition: 'transform .5s ease-in-out',
              ':hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
                boxShadow: '2px 2px 10px #000',
                borderRadius: '10px'
              }}
            >
              <Image
                sx={{
                  objectFit: 'cover',
                  borderRadius: ['10px 10px 0 0', '10px 0 0 10px']
                }}
                src="/images/Speakers/Nikita1.jpg"
              />
              <Box
                sx={{
                  color: '#8492A6',
                  background: '#252429',
                  minWidth: ['200px', '300px'],
                  paddingLeft: '1rem',
                  paddingRight: '1rem',
                  borderRadius: ['0 0 10px 10px', '0 10px 10px 0']
                }}
              >
                <Heading
                  sx={{
                    textAlign: 'left',
                    pt: ['0.7rem', '1.5rem'],
                    pb: [1, 1],
                    fontSize: [2, 3],
                    color: '#fff'
                  }}
                >
                  Nikita Gandhi
                </Heading>
                <Heading
                  sx={{
                    textAlign: 'left',
                    fontSize: '16px',
                    pb: [1, 3],
                    fontWeight: '400',
                    color: '#fff'
                  }}
                >
                  Community Manager at Google Developers
                </Heading>
                <Text
                  sx={{
                    textAlign: 'left',
                    fontSize: '14px',
                    pt: [1, 2],
                    pb: [1, 3]
                  }}
                >
                  Nikita is a part of Developer Ecosystem team at Google. She is
                  extremely passionate about spreading technical knowledge with
                  masses online and offline.
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    paddingBottom: ['0.6rem', '1rem'],
                    paddingTop: '5px'
                  }}
                >
                  <Service
                    href="https://twitter.com/Nikkitagandhi"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="twitter"
                    title="Nikita on Twitter"
                  />

                  <Service
                    href="https://nikkitagandhi.medium.com/"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      pl: '1rem',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="medium-fill"
                    title="Nikita on Medium"
                  />

                  {/* <Button
                      variant="primary"
                      rel="noopener"
                      sx={{
                        fontSize: ['0.5rem', '0.6rem'],
                        ml: '45%',
                        mb: '0'
                      }}
                    >
                      Register
                  </Button> */}
                </Box>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Container>
    </Box>
  );
};

export default SpeakerSection;
