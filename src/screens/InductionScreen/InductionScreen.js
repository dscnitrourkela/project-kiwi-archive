import { Box, Button, Container, Grid, Heading, Text, Link } from 'theme-ui';
import theme from '../../lib/theme';
import TypeformEmbed from './TypeformEmbed';

const InductionScreen = () => {
  return (
    <Box
      as="section"
      sx={{
        color: 'white',
        minHeight: '100vh',
        // minWidth: '100vw',
        height: 'fit-content',
        pt: [5, 6],
        pb: [5, 6],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        backgroundColor: theme.colors.darker
      }}
    >
      {/* <div
        style={{
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        className="timeline"
      >
        <Heading
          as="h2"
          variant="title"
          sx={{ textAlign: 'center', marginBottom: '1rem' }}
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
            HackNITR 3.0 Inductions
          </Text>
        </Heading>
      </div> */}

      <div>
        <TypeformEmbed />
      </div>
    </Box>
  );
};

export default InductionScreen;
