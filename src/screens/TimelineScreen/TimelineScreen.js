import { Box, Button, Container, Grid, Heading, Text, Link } from 'theme-ui';
import theme from '../../lib/theme';

const Gallery = () => {
  return (
    <Box
      as="section"
      sx={{
        color: 'white',
        minHeight: '100vh',
        // minWidth: '100vw',
        height: 'fit-content',
        pt: [5, 6],
        pb: [5, 6],
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.darker
      }}
    >
      <div
        style={{
          margin: 0,
          padding: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        className="timeline"
      >
        <table>
          <thead>
            <tr>
              <th>Sl. No.</th>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Type</th>
              <th>Host</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Loren Ipsum sit dolor emit blah blah</td>
              <td>10/03/2021</td>
              <td>Loren Ipsum</td>
              <td> <h6 className="mini-events"> Mini Event </h6> </td>
              <td>Loren Ipsum</td>
            </tr>
            
            <tr>
              <td>2</td>
              <td>Loren Ipsum sit dolor emit blah blah</td>
              <td>11/03/2021</td>
              <td>5:30 PM</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Nikita Gandhi's Talk</td>
              <td>12/03/2021</td>
              <td>5:30 PM</td>
              <td> <h6 className="important-time-markers"> Time Markers </h6> </td>
              <td>Loren Ipsum</td>
            </tr>
            
            <tr>
              <td>2</td>
              <td>Wikipedia Run</td>
              <td>13/03/2021</td>
              <td>10:00 PM</td>
              <td> <h6 className="sessions"> Session </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Siddharth's Workshop</td>
              <td>14/03/2021</td>
              <td>Loren Ipsum</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>
            
            <tr>
              <td>2</td>
              <td>Microsoft Learn Student Ambassador's Talk</td>
              <td>15/03/2021</td>
              <td>Loren Ipsum</td>
              <td> <h6 className="sessions"> Session </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Headstart to Competitive Programming - CodeChef</td>
              <td>16/03/2021</td>
              <td>8:00 PM</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>
            
            <tr>
              <td>2</td>
              <td>Kahoot</td>
              <td>17/03/2021</td>
              <td>10:00 PM</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>1</td>
              <td>AWS for Developers</td>
              <td>18/03/2021</td>
              <td>Loren Ipsum</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Mentor Booth</td>
              <td>18/03/2021</td>
              <td>Loren Ipsum</td>
              <td> <h6 className="mini-events"> Mini Event </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Team Building Events: Among Us, Psych, skribble, Codenames</td>
              <td>18/03/2021</td>
              <td>10:00 PM</td>
              <td> <h6 className="mini-events"> Mini Event </h6> </td>
              <td>Loren Ipsum</td>
            </tr>
            
            <tr>
              <td>2</td>
              <td>Keynote Session</td>
              <td>19/03/2021</td>
              <td>5:00 PM</td>
              <td> <h6 className="sessions"> Session </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Gaurav Sen Session</td>
              <td>19/03/2021</td>
              <td>6:00 PM</td>
              <td> <h6 className="sessions"> Session </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Check-In</td>
              <td>19/03/2021</td>
              <td>7:30 PM</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Hacking Hours Begin</td>
              <td>19/03/2021</td>
              <td>10:00 PM</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Mini Event</td>
              <td>19/03/2021</td>
              <td>10:30 PM</td>
              <td> <h6 className="mini-events"> Mini Event </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Mentor Booth</td>
              <td>20/03/2021</td>
              <td>Loren Ipsum</td>
              <td> <h6 className="mini-events"> Mini Event </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Mini Event</td>
              <td>20/03/2021</td>
              <td>Loren Ipsum</td>
              <td> <h6 className="mini-events"> Mini Event </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>1</td>
              <td>CodeChef Hour</td>
              <td>20/03/2021</td>
              <td>2:00 PM</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Logan Kilpatrick's Session</td>
              <td>20/03/2021</td>
              <td>7:30 PM</td>
              <td> <h6 className="sessions"> Session </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>1</td>
              <td>Mini Event</td>
              <td>20/03/2021</td>
              <td>Loren Ipsum</td>
              <td> <h6 className="mini-events"> Mini Event </h6> </td>
              <td>Loren Ipsum</td>
            </tr>
            
            <tr>
              <td>2</td>
              <td>Hacking Hours End</td>
              <td>21/03/2021</td>
              <td>10:00 AM</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>2</td>
              <td>DSC Manager Session</td>
              <td>21/03/2021</td>
              <td>6:00 PM</td>
              <td> <h6 className="sessions"> Session </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Project Showcase</td>
              <td>21/03/2021</td>
              <td>Loren Ipsum</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Juan Pablo's Session</td>
              <td>21/03/2021</td>
              <td>10:00 PM</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Prizes Announcement</td>
              <td>27/03/2021</td>
              <td>lorem</td>
              <td> <h6 className="workshops"> Workshop </h6> </td>
              <td>Loren Ipsum</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Box>
  );
};

export default Gallery;
