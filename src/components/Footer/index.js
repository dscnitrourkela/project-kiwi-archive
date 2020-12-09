import { Container, Grid, Link, Typography } from '@material-ui/core';

import useStyles from './Footer.styles';

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify="center">
        {/* <Grid item>
          <img src="/images/pattern.png" />
        </Grid> */}
        <Grid item>
          <Container className={classes.container}>
            <Typography variant="body2" className={classes.findUs}>
              Find us on
            </Typography>
            <Grid
              container
              direction="row"
              className={classes.logoGrid}
              spacing={5}
            >
              <Grid item>
                <Link className={classes.logoBox}>
                  <img src="/images/facebook.svg" className={classes.logo} />
                  <Typography variant="subtitle1" className={classes.logoText}>
                    facebook
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link className={classes.logoBox}>
                  <img src="/images/instagram.svg" className={classes.logo} />
                  <Typography variant="subtitle1" className={classes.logoText}>
                    instagram
                  </Typography>
                </Link>
              </Grid>
              {/* <Grid item>
                <Link className={classes.logoBox}>
                  <img
                    src="/images/behance_icon.svg"
                    className={classes.logo}
                  />
                  <Typography variant="subtitle1" className={classes.logoText}>
                    behance
                  </Typography>
                </Link>
              </Grid> */}
            </Grid>
            <Typography variant="body2" className={classes.copyrightText}>
              &#169; 2020. All Rights Reserved.
            </Typography>
          </Container>
        </Grid>
        {/* <Grid item>
          <img src="/images/pattern.png" />
        </Grid> */}
      </Grid>
    </footer>
  );
}
