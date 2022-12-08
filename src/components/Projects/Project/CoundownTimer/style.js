import styled from "styled-components";

const Container = styled.div`
  color: var(--colorPrimary);
  width: 100%;
  height: 100vh;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TimerWrap = styled.div`
  font-size: 24px;
  width: 400px;
`;
export { Container, TimerWrap };
