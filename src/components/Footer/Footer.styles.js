import { makeStyles } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';

export default makeStyles((theme) => ({
  container: {
    height: '10rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  footer: {
    height: '10rem',
    overflow: 'hidden',
    padding: '0 1rem',
    // borderBottom: `12px solid ${theme.palette.secondary.main}`,
    boxShadow: `0px -2px 1px 0 ${fade(theme.palette.secondary.main, 0.2)}`
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    '&:hover': {
      color: theme.palette.primary.main,
      textDecoration: 'none'
    }
  },
  logo: {
    height: '1.25rem',
    width: 'auto',
    margin: '.25rem',
    color: theme.palette.grey[700]
  },
  logoText: {
    color: theme.palette.grey[700]
  },
  findUs: {
    textAlign: 'center',
    color: theme.palette.grey[500]
  },
  copyrightText: {
    fontSize: '.8rem',
    textAlign: 'center',
    color: theme.palette.grey[500]
  }
}));
