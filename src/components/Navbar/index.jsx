import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Container, LinkWrapper, Wrapper } from "./style";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
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
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
