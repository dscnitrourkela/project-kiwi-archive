import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Grid, Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import CountDown from '../../components/CountDown';

import useStyles from './LandingScreen.styles';

export default function LandingScreen() {
  const classes = useStyles();

  return (
    <>
      <Head>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.5/lottie.min.js"
          integrity="sha512-0bCDSnaX8FOD9Mq8WbHcDwshXwCB5V4EP+UBu87WQgga2b7lAsuEbaSmIZjH/XEmNhJuhrPbFHemre5HZwrk9w=="
          crossorigin="anonymous"
        ></script>
      </Head>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        {/* <io19-countdown date="March 19, 2021 10:00 IST"></io19-countdown> */}
        {/* <Typography variant="h1" className={classes.title}>
          HACKNITR
        </Typography>
        <Grid
          item
          container
          direction="column"
          fluid="true"
          className={classes.container}
        >
          <Typography variant="body1" className={classes.description}>
            HackNITR is the official Hackathon of NIT Rourkela. Aliquip est
            officia consectetur ullamco non excepteur non sint id exercitation
            consectetur ad. Commodo mollit anim minim incididunt incididunt esse
            minim culpa minim quis exercitation dolore ad. Est in dolore eiusmod
            magna sit. Qui nostrud eiusmod do fugiat culpa. incididunt.
          </Typography>
        </Grid>
        <Button variant="contained" color="primary" className={classes.button}>
          Register
        </Button>

        <Link
          to="countdown-section"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className={classes.scrollButton}
        >
          <Typography variant="body2">
            Scroll Down <FontAwesomeIcon icon={faArrowDown} />
          </Typography>
        </Link> */}
      </Grid>

      {/* COUNTDOWN SECTION */}
      {/* <section id="countdown-section" className={classes.countdownSection}>
        <Container>
          <div>
            <CountDown />
          </div>
        </Container>
      </section> */}
    </>
  );
}
