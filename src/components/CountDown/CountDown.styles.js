import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  timer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '100%'
  },
  clock: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  clockDisplay: {
    height: '160px',
    position: 'relative',
    width: '160px'
  },
  clockText: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    width: '100%'
  },
  clockAmount: {
    fontSize: '3.75rem'
  },
  clockUnit: {
    fontSize: '.75rem'
  }
}));
