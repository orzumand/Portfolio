import styled from "styled-components";

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
  border-bottom: 15px solid #ffc300;
  h1 {
    color: #ededed;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  border-radius: 5px;
  a {
    padding: 12px;
    text-decoration: none;
    color: #97a4c5;
    font-size: 20px;
    gap: 10px;
    width: 100%;
    height: 30px;
    border-radius: 5px;
    display: flex;
    align-items: center;
  }
  .active {
    background: #262c49;
    color: white;
  }
`;

export { Container, Wrapper, LinkWrapper };
