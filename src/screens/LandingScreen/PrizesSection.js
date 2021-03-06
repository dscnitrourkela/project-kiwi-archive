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
        backgroundColor: theme.colors.dark,
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
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/first.png"
            name="Overall Winner get prizes worth $2400"
          />

          <SponsoredPrize
            src="/images/women.svg"
            name="All women team get prizes worth $2200"
          />

        </Grid>

        <Grid
          pt={[3, 4]}
          pb={[4, 5]}
          pl={[1, 3]}
          pr={[1, 3]}
          gap={[4, 3, 4]}
          columns={[1, 2, 4]}
          sx={{
            textAlign: 'left',
            mt: [3]
          }}
        >
          <CategoryPrize src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/social.png" heading="Social Good" />
          <CategoryPrize src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/entertainment.jpg" heading="Fun & Entertainment" />
          <CategoryPrize src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/oldhacks.jpg" heading="Old Hacks" />
          <CategoryPrize src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/innovation.jpg" heading="Open Innovation" />
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
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/trophy.png"
            name="Prize Name"
            amount="$150k"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
          />

          <SponsoredPrize
            src="https://raw.githubusercontent.com/dscnitrourkela/project-kiwi/dev/public/images/trophy.png"
            name="Prize Name"
            amount="$150k"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
            src="/images/past4.png"
            name="Best hack built with Matic"
            amount="Rs. 15,000"
          />

          <SponsoredPrize
            src="/images/tezos.png"
            name="Best hack built with Tezos"
            amount="Rs. 20,000"
          />

          <SponsoredPrize
            src="/images/portis.png"
            name="Best hack built with Portis"
            amount="Rs. 15,000"
          />

          <SponsoredPrize
            src="/images/echoar.png"
            name="Best hack built with Matic"
            amount="$1118"
          />

          <SponsoredPrize
            src="/images/sashido.png"
            name="Best hack built with ML and SashiDo"
            description="3 special prizes to top three winners"
          />
        </Grid>
      </Container>
    </Box>
  );
};

export default PrizesSection;
