import styled from "styled-components";
import { GiSteeltoeBoots } from "react-icons/gi";
import { FaHatCowboy } from "react-icons/fa";
import { SiEgghead } from "react-icons/si";
import { IoHandLeftSharp, IoHandRightSharp } from "react-icons/io5";
const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  width: 15%;
  height: 100vh;
  background-color: #001d3d;
  color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  position: relative;
  border-top: 15px solid #ffc300;
  h1 {
    color: #ededed;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  border: 1px solid white;
  padding: 20px;
  border-radius: 10px;
  a {
    text-decoration: none;
    color: white;
    display: flex;
    gap: 10px;
  }
  .active {
    color: #fcf300;
  }
`;
const Boots = styled(GiSteeltoeBoots)`
  font-size: 70px;
`;
const Hat = styled(FaHatCowboy)`
  font-size: 70px;
`;
const LeftHand = styled(IoHandLeftSharp)`
  position: absolute;
  right: 35px;
  bottom: 270px;
  font-size: 35px;
  transform: rotate(200deg);
`;
const RightHand = styled(IoHandRightSharp)`
  position: absolute;
  bottom: 270px;
  left: 35px;
  font-size: 35px;
  transform: rotate(160deg);
`;
const Head = styled(SiEgghead)`
  top: 10rem;
  font-size: 6 0px;
  position: absolute;
  display: none;
`;

export {
  Container,
  Wrapper,
  LinkWrapper,
  Boots,
  Hat,
  LeftHand,
  RightHand,
  Head,
};
