import { Box, Button, Image, Container, Grid, Heading, Text, Link } from 'theme-ui';
import theme from '../../lib/theme';

const Gallery = () => {
  return (
    <Box
      as="section"
      sx={{
        color: 'white',
        minHeight: '100vh',
        // width: '100vw',
        height: 'fit-content',
        pt: [5, 5],
        pb: [5, 6],
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        backgroundColor: theme.colors.darker
      }}
    >
      <Container
        sx={{
          margin: ["2rem 3rem", "2rem 3rem"],
          padding: 0,
          justifyContent: 'left',
          alignItems: 'left',
          h3:{
            margin:"2rem auto"
          }
        }}
      >
        <h1>Hello Hackers 👋</h1>


        <h3> Important links </h3>
        <ul>
          <li><strong>Devfolio</strong>(Registrations and Submissions) <strong>:</strong> <Link href="https://hacknitr2.devfolio.co/">https://hacknitr2.devfolio.co/</Link> </li>
          <li><strong>Discord:</strong> <Link href="https://hacknitr.tech/discord">https://hacknitr.tech/discord</Link></li>          
          <li><strong>Airmeet:</strong>(Virtual Conference for all workshops and sessions)<strong>:</strong> <Link href="https://www.facebook.com/hacknitr">https://hacknitr.tech/live</Link></li>
          <li><strong>Timeline:</strong> <Link href="https://hacknitr.tech/timeline">https://hacknitr.tech/timeline</Link></li>             
          <li><strong>HackNITR 1.0 Report:</strong> If you want to know what happened in our first edition, check out this link <Link href="https://report.hacknitr.tech/">https://report.hacknitr.tech/</Link> . For new hackers, we highly recommend you to go through the submissions for inspiration.</li>                       
        </ul>
        
        <h3>Free Resources worth <strong>USD126k</strong>  & stickers for all</h3>
        <Container sx={{display:"flex",flexDirection:['column','row']}}>
          <Box>
            <ul>
              <li><strong>Codex:</strong> Free 3 months trial subscription</li>
              <li><strong>EchoAR:</strong> 1 month free business Tier Access</li>
              <li><strong>Invision:</strong>  Upgrade for 3 months</li>
              <li><strong>Matic:</strong>  Lifetime Premium Plan</li>
              <li><strong>Voiceflow:</strong> PRO access for 6 months</li>
              <li><strong>Taskade:</strong>Upgrade to Taskade unlimited</li>
              <li><strong>Sashido:</strong>Sashido Platform Credits</li>
              <li><strong>Wolfram:</strong>Wolfram|One for thirty days</li>
            </ul>
            <Text>Join our Discord server and check out the <Link href="https://hacknitr.tech/discord"><code>#resources</code></Link> channel to claim all the above resources 🚀</Text>
          </Box>
          <Box>
            <Image sx={{objectFit: 'contain', height: '250px', width: '100%', paddingTop: '5px', borderRadius:"10px"}} src="/images/stickers.jpeg" />
          </Box>
        </Container>


        <h3>Submission Requirements</h3>
        <ul>
          <li>You must submit a 2-minute (max) video demo! Mention the services by our sponsors you used and the tracks you are applying for in the introduction of the video.</li>
          <li>The video should demonstrate your project and not be a presentation or pitch.</li>
          <li>You must link to a public code repository for your project.</li>
          <li>The project should be entirely built during the hackathon hours xcept for the hack which is built under the Old Hacks Track).</li>
        </ul>   
        <Container
         sx={{
           margin: 0,
           padding: 0,
           display: 'flex',
           justifyContent: 'center',
            alignItems: 'center',
           minWidth:"1000px"
           
         }}
       >
         <iframe sx={{
        border: "None",
        minWidth:"100vw"
      }} src="https://whimsical.com/embed/Ww44y1QzyexHKuXJzbpQCi@7YNFXnKbYm2NUzpRWG8V8"></iframe>
       </Container>
        

       <Text><strong>In case of any further queries, DM us on any of our social media handles mentioned above or write a mail to organiser@hackntir.tech</strong></Text>
      </Container>
    </Box>

    
  );
};

export default Gallery;
