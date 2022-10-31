import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, LinkWrapper, Wrapper } from "./style";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <h1>Orzumand</h1>
        <LinkWrapper>
          <NavLink to={"/home"}>
            <AiOutlineHome />
            Home
          </NavLink>
          <NavLink to={"/about"}>
            <AiOutlineUser />
            About
          </NavLink>
          <NavLink to={"/project"}>
            <AiOutlineProject />
            Projects
          </NavLink>
        </LinkWrapper>

        <h3>mini footer</h3>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
