import React from "react";
import { Container } from "./style";
const path = window.document.location.pathname;
const Simple = () => {
  return (
    <Container>
      <h1>{path}</h1>
    </Container>
  );
};

export default Simple;
