import styled from "styled-components";

const Container = styled.div`
  width: 85%;
  padding-top: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #219ebc;
  align-items: center;

  padding: 20px 100px;
  position: relative;
  .yellow {
    color: #ffb703;
  }
`;

const Text = styled.p`
  font-size: 20px;
  text-align: center;
  width: 100%;
`;
const Tooday = styled.div`
  font-size: 20px;
  flex-wrap: nowrap;
  position: absolute;
  display: flex;
  bottom: 40px;
  right: 50px;
`;
export { Container, Text, Tooday };
