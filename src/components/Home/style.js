import styled, { keyframes } from "styled-components";

const Container = styled.div`
  color: var(--colorPrimary);
  width: 85%;
  height: 100vh;

  display: flex;
  align-items: center;
  background-color: #ededed;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MineTitle = styled.div`
  width: 25rem;
  height: 10rem;
  position: absolute;
  top: 9rem;
  left: 7rem;
  color: #003566;
  font-size: 25px;
  .surname {
    padding-left: 50px;
  }
`;

const Title = styled.div`
  color: #ffcb05;
  font-weight: 600;
  font-size: 185px;
  position: absolute;
  left: 5rem;
  top: 6rem;
  opacity: 0.6;
`;
const DevTitle = styled.div`
  position: absolute;
  top: 18rem;
  left: 5.5rem;
  font-weight: 700;
  letter-spacing: 6px;
  color: #11296b;
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
  width: 150px;
  height: 132px;
  position: absolute;
  top: 20rem;
  left: 5.5rem;
  animation-name: ${Rotate};
  animation-duration: 7s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

export { Container, MineTitle, Title, DevTitle, RIcon };
