import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Boots,
  Container,
  Hat,
  Head,
  LeftHand,
  LinkWrapper,
  RightHand,
  Wrapper,
} from "./style";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from "react-icons/ai";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Hat />
        <Head />
        {/* <h1>Orzumand</h1> */}
        <LeftHand />
        <RightHand />
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

        <Boots />
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
