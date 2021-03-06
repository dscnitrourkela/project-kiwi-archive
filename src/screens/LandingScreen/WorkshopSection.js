import { Box, Container, Grid, Heading } from 'theme-ui';
import theme from '../../lib/theme';
import Workshop from '../../components/workshop';

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
          columns={[1, 2]}
          gap={5}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            mb: [5, 6],
            mt: [4, 5]
          }}
        >
          <Workshop
            src="/images/Workshops/sanket.png"
            title="Headstart to Competitive Programming"
            name="Sanket Singh"
            designation="Software Development Engineer, LinkedIn"
            description="Experience the programming world through a hands-on workshop with CodeChef."
            href1="https://www.instagram.com/sanket.singh__/"
            icon1="instagram"
            title1="Sanket on Instagram"
            href2="https://github.com/singhsanket143"
            icon2="github"
            title2="Sanket on GitHub"
          />

          <Workshop
            src="/images/Workshops/sumanresize.png"
            title="AWS For Developers             "
            name="Suman Debnath"
            designation="Principal Developer Advocate at Amazon Web Services based in India"
            description=""
            href1="https://twitter.com/_sumand"
            icon1="twitter"
            title1="Suman on Twitter"
            href2="https://github.com/debnsuma"
            icon2="github"
            title2="Suman on GitHub"
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkshopSection;
