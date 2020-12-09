import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  grid: {
    height: '95vh'
  },
  container: {
    maxWidth: '37.5rem',
    textAlign: 'center',
    margin: '2rem 0'
  },
  title: {
    fontWeight: 800,
    color: theme.palette.primary.main
  },
  button: {
    padding: '1rem 3rem',
    borderRadius: '0.75rem'
  },
  description: {
    color: theme.palette.grey[600]
  },
  scrollButton: {
    fontSize: '0.5rem',
    fontWeight: theme.typography.fontWeightLight,
    color: theme.palette.grey[600],
    letterSpacing: '10px',
    textTransform: 'capitalize',
    justifySelf: 'end',
    position: 'absolute',
    bottom: '2rem',
    cursor: 'pointer',

    '&:hover': {
      textDecoration: 'none',
      color: theme.palette.primary.main
    }
  },
  aboutGrid: {
    margin: '2rem 0'
  },
  countdownSection: {
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    background: '#e1bee7',
    // background: '-webkit-linear-gradient(135deg, #a8ff78, #78ffd6)',
    // background: 'linear-gradient(135deg, #a8ff78, #78ffd6)',
    backgroundBlendMode: 'normal',
    color: 'rgba(black, .65)'
  },
  countdownContainer: {
    marginTop: '2rem'
  }
}));

/*
  background: #5433FF;  
background: -webkit-linear-gradient(to right, #A5FECB, #20BDFF, #5433FF);  
background: linear-gradient(to right, #A5FECB, #20BDFF, #5433FF); 

*/
