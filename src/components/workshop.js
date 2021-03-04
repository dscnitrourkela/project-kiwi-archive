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
import theme from '../lib/theme';
import Icon from './icon';

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

export default function workshop() {
 return(
  <Box
      id="speaker-section"
      as="section"
      sx={{
        color: 'white',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.colors.dark
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
                src="/images/Workshops/sanket.png"
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
                    pt: ['0.7rem', '1.3rem'],
                    pb: [1, 1],
                    fontSize: '24px',
                    color: '#fff'
                  }}
                >
                  Headstart to Competitive Programming
                </Heading>
                <Heading
                  sx={{
                    textAlign: 'left',
                    pt: ['0.7rem', '1rem'],
                    pb: [1, 1],
                    fontSize: 3,
                    color: '#fff'
                  }}
                >
                  Sanket Singh
                </Heading>
                <Heading
                  sx={{
                    textAlign: 'left',
                    fontSize: '16px',
                    pt: [1, 2],
                    pb: [1, 2],
                    fontWeight: '400',
                    color: '#fff'
                  }}
                >
                  Software Development Engineer, LinkedIn
                </Heading>
                <Text
                  sx={{
                    textAlign: 'justify',
                    fontSize: '14px',
                    pt: [1, 2],
                    pb: [1, 3]
                  }}
                >
                  Come and experience the programming world through a hands-on workshop with CodeChef.
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'start',
                    paddingBottom: '10px',
                    paddingTop: '5px'
                  }}
                >
                  <Service
                    href="https://www.instagram.com/sanket.singh__/"
                    size={24}
                    sx={{
                      justifySelf: 'center',
                      color: '#8492A6',
                      ':hover': {
                        color: '#EC3750'
                      }
                    }}
                    icon="instagram"
                    title="Sanket on Instagram"
                  />

                  <Service
                    href="https://github.com/singhsanket143"
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
                    title="Sanket on GitHub"
                  />

                  <Box
                    sx={{
                      fontSize: '12px',
                      ml: '30%',
                      mb: '0',
                      backgroundColor: '#EC3750',
                      backgroundImage: 'at left top, rgb(255,140,55)',
                      padding: '3px 5px',
                      borderRadius: '5px',
                      color: '#fff'
                    }}
                  >
                    <a
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        color: '#fff'
                      }}
                      href="https://google.com"
                      target="_blank"
                    >
                      <Service
                        size={24}
                        sx={{
                          justifySelf: 'center',
                          color: '#fff',
                          ':hover': {
                            color: '#fff'
                          }
                        }}
                        icon="event-add"
                        title="Add to Google Calendar"
                      />
                      <Text
                        as="p"
                        sx={{ pt: '3px', ':hover': { color: '#c0c0c0' } }}
                      >
                        Add to calendar
                      </Text>
                    </a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
   </Box>
 )
}