import React from "react";
import Img from "../../assets/img/React-icon.png";
import { Container, DevTitle, MineTitle, RIcon, Title } from "./style";
const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Title>I'm</Title>
      <MineTitle>
        <h1>Hayotbek</h1>
        <h1 className="surname">Yoldashev</h1>
      </MineTitle>
      <DevTitle>React Frontend Developer</DevTitle>
      <RIcon src={Img}></RIcon>
    </Container>
  );
};

export default Home;
