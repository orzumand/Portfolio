import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TimerWrap = styled.div`
  font-size: 24px;
  width: 400px;
  display: flex;

  align-items: center;
  flex-direction: column;
`;

TimerWrap.Nums = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  text-align: center;
  width: 100%;
`;
TimerWrap.Titels = styled.div`
  display: flex;
  border: 2px solid red;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px;
`;
export { Container, TimerWrap };
