import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  circle: {
    transform: 'rotate(-90deg)',
    transformOrigin: '50% 50%',
    transition: 'stroke-dashoffset .4s cubic-bezier(.4, 0, 0, 1.7)'
  }
}));
