import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Text } from "./style";

const About = () => {
  const [old, setOld] = useState("");
  const newYears = "May 17, 2000 2:59:0";
  const newYearDate = new Date(newYears);
  const currentDate = new Date();

  const TotalSeconds = (currentDate - newYearDate) / 1000;
  const year = Math.floor(TotalSeconds / 31536000);
  const days = Math.floor(TotalSeconds / 31536000 / 24);
  const hours = Math.floor(TotalSeconds / 3600) % 24;
  const minutes = Math.floor(TotalSeconds / 60) % 60;
  const seconds = Math.floor(TotalSeconds) % 60;

  useEffect(() => {
    const OldID = setInterval(
      () => setOld(`${year}/${days}/${hours}/${minutes}/${seconds}`),
      1000
    );
    return function cleeanup() {
      clearInterval(OldID);
    };
  });

  console.log(year);

  const d = new Date();
  const h = d.getFullYear();
  const m = d.getDate();
  const s = d.getMonth();

  const date = `${m}/${s}/${h}`;

  console.log(d);
  return (
    <Container>
      <h1> About Me </h1>
      <Text>
        Hi, my full name is ''
        <div className="yellow"> Hayotbek Yo'ldashev</div>'', I was born in
        Kashkadarya region, O'zbekistan in 2000. I'm {old} years old.
      </Text>
      <Text>
        Tooday : <div className="yellow"> {date}</div>
      </Text>
    </Container>
  );
};

export default About;
