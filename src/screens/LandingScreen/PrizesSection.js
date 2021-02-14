import { Box, Container, Grid, Heading, Image, Text, Card } from 'theme-ui';
import theme from '../../lib/theme';

const PrizesSection = () => {
  return (
    <Box
      id="prizes-section"
      as="section"
      sx={{
        py: [4, 5],
        color: 'white',
        minHeight: '100vh',
        backgroundColor: theme.colors.darker,
        height: 'fit-content',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Container>
        <Heading
          as="h2"
          variant="title"
          sx={{ textAlign: 'center', marginTop: '4rem' }}
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
            Prizes
          </Text>
        </Heading>

        <Grid
          pt={[3, 4]}
          pb={[4, 5]}
          pl={[1, 3]}
          pr={[1, 3]}
          gap={[4, 3, 4]}
          columns={[1, 2]}
          sx={{
            textAlign: 'left',
            mt: [3]
          }}
        >
          <Card
            variant="interactive"
            sx={{
              backgroundColor: theme.colors.darkless,
              display: 'flex',
              flexDirection: 'column',
              color: '#fff',
              padding: 0,
              margin: 0,
            }}
          >
            <div>
              <Image
                src="/images/valorant.png"
                style={{ objectFit: 'fill', height: '250px', width: '100%' }}
              />
            </div>
            <div style={{padding: '1rem'}}>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Heading as="h2">Prize Name</Heading>
                <Heading as="h2"><Text>$150k</Text></Heading>
              </Box>
              <Text as="p" sx={{color: '#8492A6', textAlign: 'left'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</Text>
            </div>
          </Card>

          <Card
            variant="interactive"
            sx={{
              backgroundColor: theme.colors.darkless,
              display: 'flex',
              flexDirection: 'column',
              color: '#fff',
              padding: 0,
              margin: 0,
            }}
          >
            <div>
              <Image
                src="/images/valorant.png"
                style={{ objectFit: 'fill', height: '250px', width: '100%' }}
              />
            </div>
            <div style={{padding: '1rem'}}>
              <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Heading as="h2">Prize Name</Heading>
                <Heading as="h2"><Text>$150k</Text></Heading>
              </Box>
              <Text as="p" sx={{color: '#8492A6', textAlign: 'left'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.</Text>
            </div>
          </Card>
        </Grid>
      </Container>
    </Box>
  );
};

export default PrizesSection;
