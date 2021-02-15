import { Box, Heading, Image, Card } from 'theme-ui';
import theme from '../lib/theme';

const categoryPrize = (props) => {
 const {src, heading} = props;

 return (
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
        src={src}
        style={{ objectFit: 'cover', height: '250px', width: '100%' }}
      />
    </div>
    <div style={{padding: '1rem'}}>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <Heading as="h2">{heading}</Heading>
      </Box>
    </div>
  </Card>
 )
}

export default categoryPrize;