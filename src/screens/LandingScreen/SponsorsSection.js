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
            Our Sponsors
          </Text>
        </Heading>

        <Container sx={{mt: [5, 6], mb: [2, 5]}}>
        <Heading
          as="h4"
          variant="title"
          sx={{ textAlign: 'center', marginBottom: '1rem',}}
          style={{
            background: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)',
            // background: '#FCC201',
            width: 'fit-content',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            borderRadius: '10px'
            }}
        >
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 1,
              mx: [-2, 0],
              whiteSpace: 'nowrap',
              color: '#5d114c',
              fontSize: ['2.6rem', '3rem']
            }}
            
          >
            Gold Sponsors
          </Text>
        </Heading>
        <Grid
          columns={[1, 1]}
          gap={6}
          sx={{ alignItems: 'center', mt: 4 }}
        >
          <Link
            href="https://devfolio.co/"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Image
              src="/images/past.png"
              alt="Devfolio logo"
              sx={{
                maxHeight: '5rem'
              }}
            />
          </Link>
          
        </Grid>
        </Container>

        <Container sx={{mt: [6, 6]}}>
        <Heading
          as="h4"
          variant="title"
          sx={{ textAlign: 'center', marginBottom: '1rem',}}
          style={{
            background: 'linear-gradient(-72deg,#dedede,#ffffff 16%,#dedede 21%,#ffffff 24%,#454545 27%,#dedede 36%,#ffffff 45%,#ffffff 60%,#dedede 72%,#ffffff 80%,#dedede 84%,#a1a1a1)',
            width: 'fit-content',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            borderRadius: '10px'
            }}
        >
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 1,
              mx: [-2, 0],
              whiteSpace: 'nowrap',
              color: '#5d114c',
              fontSize: ['2.6rem', '3rem']
            }}
            
          >
            Silver Sponsors
          </Text>
        </Heading>
        <Grid
          columns={[1, 3]}
          gap={6}
          sx={{ alignItems: 'center', mt: 4 }}
        >

          <Link
            href="https://matic.network/"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Image
              src="/images/past4.png"
              alt="Matic Logo"
              sx={{ justifySelf: 'center' }}
            />
          </Link>

          <Link
            href="https://www.portis.io/"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Image
              src="/images/portis.png"
              alt="Portis Logo"
              sx={{
                maxHeight: '20rem'
              }}
            />
          </Link>

          <Link
            href="https://tezos.com/"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Image
              src="/images/tezos.png"
              alt="Tezos Logo"
              sx={{
                maxHeight: '15rem'
              }}
            />
          </Link>
          
        </Grid>

        <Grid
          columns={[1, 1]}
          gap={6}
          sx={{ alignItems: 'center', mt: [6, 5] }}
          >
            <Link
              href="https://www.wolfram.com/language/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="/images/wolfram.png"
                alt="Wolfram Logo"
                sx={{
                  maxHeight: '6rem'
                }}
              />
            </Link>
          </Grid>

        </Container>

        <Container sx={{mt: [6, 6]}}>
        <Heading
          as="h4"
          variant="title"
          sx={{ textAlign: 'center', marginBottom: '1rem',}}
          style={{
            background: 'linear-gradient(-72deg,#ca7345,#ffdeca 16%,#ca7345 21%,#ffdeca 24%,#a14521 27%,#ca7345 36%,#ffdeca 45%,#ffdeca 60%,#ca7345 72%,#ffdeca 80%,#ca7345 84%,#732100)',
            width: 'fit-content',
            margin: '0 auto',
            padding: '0.5rem 1rem',
            borderRadius: '10px'
            }}
        >
          <Text
            as="span"
            sx={{
              borderRadius: 'default',
              px: 1,
              mx: [-2, 0],
              whiteSpace: 'nowrap',
              color: '#5d114c',
              fontSize: ['2.6rem', '3rem']
            }}
            
          >
            Bronze Sponsors
          </Text>
        </Heading>
        <Grid
          columns={[1, 3]}
          gap={6}
          sx={{ alignItems: 'center', mt: 4 }}
        >

          <Link
            href="https://www.echoar.xyz/"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Image
              src="/images/echoar.png"
              alt="Sticker Mule Logo"
              sx={{
                maxHeight: '15rem'
              }}
            />
          </Link>

          <Link
            href="https://everwall.com/"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Image
              src="/images/everwall.png"
              alt="Everwall Logo"
              sx={{
                maxHeight: '15rem'
              }}
            />
          </Link>

          <Link
            href="https://www.stickermule.com/"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Image
              src="/images/stickermule.png"
              alt="Sticker Mule Logo"
              sx={{
                maxHeight: '20rem'
              }}
            />
          </Link>
        </Grid>

        <Grid
          columns={[1, 1]}
          gap={6}
          sx={{ alignItems: 'center', mt: [6, 5] }}
          >
            <Link
              href="https://www.voiceflow.com/"
              target="_blank"
              rel="noreferrer"
              sx={{ justifySelf: 'center' }}
            >
              <Image
                src="/images/Voiceflow.png"
                alt="Voiceflow Logo"
                sx={{
                  maxHeight: '5rem'
                }}
              />
            </Link>
          </Grid>
        </Container>
        {/* <Grid
          columns={[1, 3]}
          gap={6}
          sx={{ alignItems: 'center', mt: 4 }}
        >

          <Link
            href="https://www.echoar.xyz/"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Image
              src="/images/echoar.png"
              alt="Sticker Mule Logo"
              sx={{
                maxHeight: '15rem'
              }}
            />
          </Link>

          <Link
            href="https://www.stickermule.com/"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Image
              src="/images/stickermule.png"
              alt="Sticker Mule Logo"
              sx={{
                maxHeight: '20rem'
              }}
            />
          </Link>

          <Link
            href="https://www.voiceflow.com/"
            target="_blank"
            rel="noreferrer"
            sx={{ justifySelf: 'center' }}
          >
            <Image
              src="/images/Voiceflow.png"
              alt="Voiceflow Logo"
              sx={{
                maxHeight: '15rem'
              }}
            />
          </Link>
          
        </Grid> */}
      </Container>
    </Box>
  );
};

export default SponsorsSection;
