import React, { useEffect, useState } from "react";

import { Container, TimerWrap } from "./style";

const Timer = () => {
  const currentDate = new Date();
  const [Time, setTime] = useState("");
  const [date, setDate] = useState("");
  const newYears = `${date} 00:00:0`;
  const newYearDate = new Date(newYears);
  const TotalSeconds = (newYearDate - currentDate) / 1000;

  const days = Math.floor(TotalSeconds / 3600 / 24);
  const hours = Math.floor(TotalSeconds / 3600) % 24;
  const minutes = Math.floor(TotalSeconds / 60) % 60;
  const seconds = Math.floor(TotalSeconds) % 60;
  useEffect(() => {
    const TimeId = setInterval(() => {
      setTime({
        days: isNaN(days) ? 0 : days,
        hours: isNaN(hours) ? 0 : hours,
        minutes: isNaN(minutes) ? 0 : minutes,
        seconds: isNaN(seconds) ? 0 : seconds,
      });
    }, 1000);
    return function cleeanup() {
      clearInterval(TimeId);
    };
  });
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  const onSelect = (e) => {
    setDate(e.target.value);
  };
  console.log(Time);
  return (
    <Container>
      <TimerWrap>
        {Time.seconds > 0 ? (
          <TimerWrap.Nums>
            <div>
              {Time.days}:
              <br /> Days
            </div>
            <div>
              {formatTime(Time.hours)}
              <br />
              Hours
            </div>
            <div>
              {formatTime(Time.minutes)}
              <br />
              Minutes
            </div>
            <div>
              {formatTime(Time.seconds)}
              <br />
              Seconds
            </div>
          </TimerWrap.Nums>
        ) : (
          "Please Enter Your Next Birthday"
        )}
      </TimerWrap>

      <input type="date" onChange={(e) => onSelect(e)} />

      <h2>{date}</h2>
    </Container>
  );
};

export default Timer;
