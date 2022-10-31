import React from "react";
import Img from "../../assets/img/React-icon.png";
import Boy from "../../assets/img/boy2.png";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import {
  TbBrandTelegram,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
} from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import {
  AboutCon,
  Container,
  DevTitle,
  Foto,
  IconsCon,
  MineTitle,
  RIcon,
  SkilsCon,
  Time,
  Title,
} from "./style";
import { useState } from "react";
import { useEffect } from "react";
const Home = () => {
  const [time, setTime] = useState("");

  function Format(val) {
    if (val < 10) {
      return 0;
    } else {
      return "";
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTime(Format(h) + h + ":" + Format(m) + m + ":" + Format(s) + s);
  }
  return (
    <Container>
      <Title>I'm</Title>
      <MineTitle>
        <h1>Hayotbek</h1>
        <h1 className="surname">Yoldashev</h1>
      </MineTitle>
      <DevTitle>Web Frontend Developer</DevTitle>
      <RIcon src={Img} />
      <Foto src={Boy} />
      <IconsCon>
        <a href="https://www.instagram.com/orzumand_    ">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/orzumand/Portfolio">
          <AiFillGithub />
        </a>
        <a href="/">
          <AiFillFacebook />
        </a>
        <a href="https://t.me/orzu_mand">
          <TbBrandTelegram />
        </a>
        <a href="https://hayotbekyoldashev0@gmail.com">
          <SiGmail />
        </a>
        <a href="https://hayotbekyoldashev0@gmail.com">
          <AiFillLinkedin />
        </a>
      </IconsCon>
      <AboutCon>
        <i>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem est
          nesciunt labore at cumque voluptates, eius error et similique
          consequuntur. Alias explicabo odit, culpa sit praesentium molestiae
          officia quo similique natus libero, nobis quibusdam sunt molestias?
          Atque at fugit perspiciatis? Accusamus ut dolor non. Est minus id nisi
          accusantium quia mollitia magni nihil cum soluta! Voluptatem, aliquid
          iste animi voluptas quod culpa sunt numquam, minus necessitatibus eius
          fugiat placeat deserunt, inventore dolorum deleniti voluptatibus
          eligendi. Earum soluta non neque omnis sed, mollitia porro quod
          ducimus perspiciatis adipisci sit, ipsum officiis nemo quo aut cumque
          quae minus autem rem vel qui.
        </i>
      </AboutCon>
      <SkilsCon>
        <SkilsCon.Skill>
          <TbBrandHtml5 />
          <div className="title">html</div>
        </SkilsCon.Skill>

        <SkilsCon.Skill>
          <TbBrandCss3 />
          <div className="title">css</div>
        </SkilsCon.Skill>

        <SkilsCon.Skill>
          <TbBrandJavascript />
          <div className="title">JavaScript</div>
        </SkilsCon.Skill>

        <SkilsCon.Skill>
          <FaReact />
          <div className="title">React.js</div>
        </SkilsCon.Skill>
      </SkilsCon>
      <Time>{time}</Time>
    </Container>
  );
};

export default Home;
