import React, { useState, useEffect } from 'react';
import SvgCircle from './SvgCircle';

import useStyles from './CountDown.styles';

const zerofill = (num) => (num < 10 && num >= 0 ? `0${num}` : num);

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  const difference = +new Date(`03/19/2021`) - +new Date();

  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const CountDown = () => {
  const classes = useStyles();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{' '}
      </span>
    );
  });

  return (
    <div className={classes.timer}>
      <div className={classes.clock}>
        <div className={classes.clockDisplay}>
          <SvgCircle max={365} done={timeLeft.days} />
          <div className={classes.clockText}>
            <span className={classes.clockAmount}>
              {zerofill(timeLeft.days)}
            </span>
            <span className={classes.clockUnit}>days</span>
          </div>
        </div>
        <div className={classes.clockDisplay}>
          <SvgCircle max={24} done={timeLeft.hours} />
          <div className={classes.clockText}>
            <span className={classes.clockAmount}>
              {zerofill(timeLeft.hours)}
            </span>
            <span className={classes.clockUnit}>hours</span>
          </div>
        </div>
        <div className={classes.clockDisplay}>
          <SvgCircle max={60} done={timeLeft.minutes} />
          <div className={classes.clockText}>
            <span className={classes.clockAmount}>
              {zerofill(timeLeft.minutes)}
            </span>
            <span className={classes.clockUnit}>minutes</span>
          </div>
        </div>
        <div className={classes.clockDisplay}>
          <SvgCircle max={60} done={timeLeft.seconds} />
          <div className={classes.clockText}>
            <span className={classes.clockAmount}>
              {zerofill(timeLeft.seconds)}
            </span>
            <span className={classes.clockUnit}>seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
