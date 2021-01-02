import { Box, Container, Grid, Heading, Image, Text, Link } from 'theme-ui';
import theme from '../../lib/theme';

const SponsorsSection = () => {
  return (
    <Box
      id="sponsors-section"
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
        {/* <Text as="p" variant="eyebrow">
          HackNITR
        </Text> */}

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
            Sponsors
          </Text>
        </Heading>
        <Grid
          columns={[null, null]}
          gap={[6, 6]}
          sx={{ alignItems: 'center', span: { color: 'white' }, mt: 4 }}
        >
          <Link
            href="https://www.stickermule.com/"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Image
              src="https://cdn.worldvectorlogo.com/logos/sticker-mule.svg"
              alt="Sticker Mule Logo"
              sx={{
                maxHeight: '15rem'
              }}
            />
          </Link>
        </Grid>
      </Container>
    </Box>
  );
};

export default SponsorsSection;
