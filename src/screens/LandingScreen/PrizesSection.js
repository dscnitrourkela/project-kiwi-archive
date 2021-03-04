import { Box, Container, Grid, Heading, Image, Text, Card } from 'theme-ui';
import theme from '../../lib/theme';

import CategoryPrize from '../../components/category-prize';
import SponsoredPrize from '../../components/sponsored-prize';

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
          sx={{ textAlign: 'center', mt: [1, 2], mb: [1, 4] }}
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

        <Container
          sx={{
            width: ['100%', '85%', '50%'],
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: ['2rem', 0]
          }}
        >
          <SponsoredPrize
            src="/images/first.png"
            name="Overall Winner get prizes worth $2400"
            // amount="$150k"
            // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            //     eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            //     enim ad minim veniam, quis nostrud exercitation ullamco laboris
            //     nisi ut aliquip ex ea commodo consequat."
          />
        </Container>

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
          <CategoryPrize src="/images/social.png" heading="Social Good" />
          <CategoryPrize src="/images/entertainment.jpg" heading="Fun & Entertainment" />
          <CategoryPrize src="/images/oldhacks.jpg" heading="Old Hacks" />
          <CategoryPrize src="/images/innovation.jpg" heading="Open Innovation" />
        </Grid>

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
          <SponsoredPrize
            src="/images/trophy.png"
            name="Prize Name"
            amount="$150k"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
          />

          <SponsoredPrize
            src="/images/trophy.png"
            name="Prize Name"
            amount="$150k"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default PrizesSection;
