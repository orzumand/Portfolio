import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, LinkWrapper, Wrapper } from "./style";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Orzumand</h1>
        <LinkWrapper>
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/project"}> Projects</NavLink>
        </LinkWrapper>

        <h3>mini footer</h3>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
