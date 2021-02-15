import { Box, Heading, Image, Card, Text } from 'theme-ui';
import theme from '../lib/theme';

const SponsoredPrize = (props) => {
 const {src, heading, amount, description} = props;

return(
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
)
}

export default SponsoredPrize;