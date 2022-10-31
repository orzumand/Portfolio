import styled, { keyframes } from "styled-components";

const Container = styled.div`
  color: var(--colorPrimary);
  width: 85%;
  height: 100vh;

  display: flex;
  align-items: flex-end;

  background-color: #ededed;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
`;

const MineTitle = styled.div`
  width: 25rem;
  height: 10rem;
  position: absolute;
  top: 9rem;
  left: 7rem;
  color: #003566;
  font-size: 32px;
  .surname {
    padding-left: 50px;
  }
`;

const Title = styled.div`
  color: #ffcb05;
  font-weight: 600;
  font-size: 215px;
  position: absolute;
  left: 5rem;
  top: 6rem;
  opacity: 0.6;
`;
const DevTitle = styled.div`
  position: absolute;
  top: 19rem;
  left: 5.5rem;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 6px;
  color: #11296b;
  z-index: 1;
`;

const AboutCon = styled.div`
  width: 500px;
  position: absolute;
  line-height: 200%;
  top: 23rem;
  left: 5rem;
  color: #003566;
`;
const Rotate = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}
`;
const RIcon = styled.img`
  width: 1055px;
  height: 930px;
  position: absolute;
  top: 16rem;
  left: 26.5rem;
  animation-name: ${Rotate};
  animation-duration: 57s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: 0;
  opacity: 0.7;
`;
const Foto = styled.img`
  z-index: 1;
  height: 90%;
  position: absolute;
  top: 4rem;
  right: 14rem;
`;

const IconsCon = styled.div`
  font-size: 32px;
  display: flex;
  z-index: 1;
  justify-content: space-around;
  width: 290px;
  margin-top: 58px;
  margin-right: 100px;
  /* border-bottom: 2px solid #551a8b; */
  a:hover {
    transform: scale(1.5);
    transition: 0.5s;
  }
  a {
    transition: 0.5s;
    text-decoration: none;
  }
`;

const SkilsCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  height: 500px;
  font-size: 80px;
  z-index: 1;
  margin-right: 8rem;
  margin-top: 5rem;

  .title {
    font-size: 30px;
    font-weight: 600;
    padding-left: 20px;
  }
`;

SkilsCon.Skill = styled.div`
  display: flex;
  align-items: center;
`;
const Time = styled.div`
  font-size: 32px;
  z-index: 1;
  font-weight: 600;
  border: 2px solid #003566;
  border-radius: 5px;
  margin-right: 4rem;
  background-color: #ededed;
  padding: 3px 8px;
  color: #003566;
`;
export {
  Container,
  MineTitle,
  Title,
  DevTitle,
  RIcon,
  Foto,
  IconsCon,
  AboutCon,
  SkilsCon,
  Time,
};
