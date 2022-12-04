import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Text, Tooday } from "./style";

const About = () => {
  const [old, setOld] = useState("");
  const newYears = "May 17, 2000 00:00:0";
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const TotalSeconds = (currentDate - newYearDate) / 1000;
  const year = Math.floor(TotalSeconds / 3600 / 24 / 365);
  const month = Math.floor(TotalSeconds / 3600 / 730.5) % 12;
  const days = Math.floor(TotalSeconds / 3600 / 24) % 24;
  const hours = Math.floor(TotalSeconds / 3600) % 24;
  const minutes = Math.floor(TotalSeconds / 60) % 60;
  const seconds = Math.floor(TotalSeconds) % 60;
  // console.log(month, "day");

  useEffect(() => {
    const OldID = setInterval(
      () =>
        setOld(
          `${formatTime(year)} year ${month} month ${days} day ${formatTime(
            hours
          )} hours ${formatTime(minutes)} minutes ${formatTime(
            seconds
          )} seconds`
        ),
      1000
    );
    return function cleeanup() {
      clearInterval(OldID);
    };
  });
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  // console.log(year);

  const d = new Date();
  const h = d.getFullYear();
  const m = d.getDate();
  const s = d.getMonth();

  const date = `${m}/${s}/${h}`;

  // console.log(d);
  return (
    <Container>
      <h1> About Me </h1>
      <Text>
        Hi, my full name is <div className="yellow">Hayotbek Yo'ldashev,</div>I
        was born in Kashkadarya region, O'zbekistan in 2000. My old is
        <div className="yellow">{old}.</div>I am very friendly, but only with
        people that I think are quite good.I happen really impatient and
        curious, <br />
        but I do not consider it a disadvantage.
      </Text>
      <Tooday>
        Tooday:"<div className="yellow">{date}</div>"
      </Tooday>
    </Container>
  );
};

export default About;
