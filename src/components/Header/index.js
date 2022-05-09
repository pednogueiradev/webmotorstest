import React from "react";

import logo from "../../assets/imgs/logo.svg";
import { Container } from "../../styles/global.ts";
import { Logo } from "./style.ts";

function Header() {
  return (
    <Container>
      <Logo>
        <img src={logo} alt="logo-webmotors" />
      </Logo>
    </Container>
  );
}

export default Header;
