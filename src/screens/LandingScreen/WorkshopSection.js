import { Box, Container, Grid, Heading } from 'theme-ui';
import theme from '../../lib/theme';
import Workshop from '../../components/workshop'

const WorkshopSection = () => {
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
          Workshops
        </Heading>

        <Grid
          columns={[1, 1]}
          gap={5}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            mb: [5, 6],
            mt: [4, 5]
          }}
        >
         <Workshop />
        </Grid>
        
      </Container>
    </Box>
  );
};

export default WorkshopSection;