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
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`
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
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`
  },
  {
    title: 'Culpa enim ex consectetur aliquip nisi.',
    content: `Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore 
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`
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
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`
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
                  eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, 
                  sunt in culpa qui officia deserunt 
                  mollit anim id est laborum.`
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
        <Box as="header" sx={{ textAlign: [null, 'center'], pb: [4, 5] }}>
          <Heading as="h2" variant="title">
            FAQ
          </Heading>
        </Box>
        {/* <Grid
          columns={[2]}
          gap={[4, 4]}
          sx={{ alignItems: 'end', span: { color: 'white' } }}
        >
          <Box>
            <Heading
              as="h3"
              variant="eyebrow"
              mb={2}
              sx={{ textTransform: 'none' }}
            >
              Aliqua nostrud dolore duis duis irure mollit?
            </Heading>
            <Text
              as="p"
              variant="lead"
              sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
            >
              Cupidatat aliquip sunt deserunt amet cillum adipisicing ullamco
              eiusmod eu nisi culpa. Et occaecat velit Lorem dolor cillum. Culpa
              incididunt voluptate qui anim.
            </Text>
          </Box>
          <Box>
            <Heading
              as="h3"
              variant="eyebrow"
              mb={2}
              sx={{ textTransform: 'none' }}
            >
              Aliqua nostrud dolore duis duis irure mollit?
            </Heading>
            <Text
              as="p"
              variant="lead"
              sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
            >
              Cupidatat aliquip sunt deserunt amet cillum adipisicing ullamco
              eiusmod eu nisi culpa. Et occaecat velit Lorem dolor cillum. Culpa
              incididunt voluptate qui anim.
            </Text>
          </Box>
          <Box>
            <Heading
              as="h3"
              variant="eyebrow"
              mb={2}
              sx={{ textTransform: 'none' }}
            >
              Aliqua nostrud dolore duis duis irure mollit?
            </Heading>
            <Text
              as="p"
              variant="lead"
              sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
            >
              Cupidatat aliquip sunt deserunt amet cillum adipisicing ullamco
              eiusmod eu nisi culpa. Et occaecat velit Lorem dolor cillum. Culpa
              incididunt voluptate qui anim.
            </Text>
          </Box>
          <Box>
            <Heading
              as="h3"
              variant="eyebrow"
              mb={2}
              sx={{ textTransform: 'none' }}
            >
              Aliqua nostrud dolore duis duis irure mollit?
            </Heading>
            <Text
              as="p"
              variant="lead"
              sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
            >
              Cupidatat aliquip sunt deserunt amet cillum adipisicing ullamco
              eiusmod eu nisi culpa. Et occaecat velit Lorem dolor cillum. Culpa
              incididunt voluptate qui anim.
            </Text>
          </Box>
          <Box>
            <Heading
              as="h3"
              variant="eyebrow"
              mb={2}
              sx={{ textTransform: 'none' }}
            >
              Aliqua nostrud dolore duis duis irure mollit?
            </Heading>
            <Text
              as="p"
              variant="lead"
              sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
            >
              Cupidatat aliquip sunt deserunt amet cillum adipisicing ullamco
              eiusmod eu nisi culpa. Et occaecat velit Lorem dolor cillum. Culpa
              incididunt voluptate qui anim.
            </Text>
          </Box>
          <Box>
            <Heading
              as="h3"
              variant="eyebrow"
              mb={2}
              sx={{ textTransform: 'none' }}
            >
              Aliqua nostrud dolore duis duis irure mollit?
            </Heading>
            <Text
              as="p"
              variant="lead"
              sx={{ mt: 0, pb: 2, a: { variant: 'styles.a', color: 'blue' } }}
            >
              Cupidatat aliquip sunt deserunt amet cillum adipisicing ullamco
              eiusmod eu nisi culpa. Et occaecat velit Lorem dolor cillum. Culpa
              incididunt voluptate qui anim.
            </Text>
          </Box>
        </Grid> */}
        <Accordion data={data} />
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
