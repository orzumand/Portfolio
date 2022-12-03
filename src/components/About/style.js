import styled from "styled-components";

const Container = styled.div`
  width: 85%;
  padding-top: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  color: #219ebc;
  align-items: center;
  .yellow {
    color: #ffb703;
  }
`;

const Text = styled.div`
  font-size: 20px;
  /* border: 2px solid red; */
  display: flex;
`;

export { Container, Text };
