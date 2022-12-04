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

  display: flex;
  width: 100%;
  justify-content: center;
  padding: 0px 100px;
`;

export { Container, Text };
