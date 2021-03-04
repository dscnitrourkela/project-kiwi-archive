import { Box, Button, Container, Grid, Heading, Text, Link } from 'theme-ui';
import theme from '../../lib/theme';

const Gallery = () => {
  return (
    <Box
      as="section"
      sx={{
        color: 'white',
        minHeight: '100vh',
        // width: '100vw',
        height: 'fit-content',
        pt: [5, 5],
        pb: [5, 6],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.darker
      }}
    >
      <Container
        sx={{
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <iframe
          className="twitter-wall"
          src="https://www.tweetbeam.com/show?id=mAx1I"
        ></iframe>
      </Container>
    </Box>
  );
};

export default Gallery;
