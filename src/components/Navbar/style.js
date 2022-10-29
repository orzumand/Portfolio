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
  padding: 2rem 0rem;
  gap: 10rem;
  border-top: 15px solid #ffc300;
  h1 {
    color: #ededed;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  a {
    text-decoration: none;
    color: white;
  }
  .active {
    color: #fcf300;
  }
`;
export { Container, Wrapper, LinkWrapper };
