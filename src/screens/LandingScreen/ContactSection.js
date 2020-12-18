import { Box, Container, Text, Heading } from 'theme-ui';
import HubspotForm from 'react-hubspot-form'
import theme from '../../lib/theme';

const ContactSection = () => {
  return (
    <Box
      id="contact-section"
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
        <Heading as="h2" variant="title" sx={{ textAlign: 'center' }}>
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
            Contact Us
          </Text>
        </Heading>

        <div style={{ margin: "3% 18%", width: "20vw"}}>
          <HubspotForm
          portalId='8898157'
          formId='63a673ca-c337-4699-bcfc-c11262ce3622'
          onSubmit={() => console.log('Submit!')}
          onReady={(form) => console.log('Form ready!')}
          loading={<div>Loading...</div>}
          />
      </div>
      </Container>
    </Box>
  );
};

export default ContactSection;
