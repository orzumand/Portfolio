import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Text } from "./style";

const About = () => {
  const [date, setDate] = useState("");

  const d = new Date();
  const h = d.getFullYear();
  const m = d.getUTCDay();
  const s = d.getDay();
  const Old = h - 2000;
  useEffect(() => {
    const time = setInterval(() => setDate(`${m}/${s}/${h}`), 1000);
    console.log(date);

    return function cleanup() {
      clearInterval(time);
    };
  });
  console.log(d);
  return (
    <Container>
      <h1> About Me </h1>
      <Text>
        Hi, my full name is ''
        <div className="yellow"> Hayotbek Yo'ldashev</div>'', I was born in
        Kashkadarya region, O'zbekistan in 2000. I'm {Old} years old.
      </Text>
      <h2>{date}</h2>
    </Container>
  );
};

export default About;
