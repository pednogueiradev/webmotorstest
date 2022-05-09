import React from "react";
import { StyledButton } from "./style.ts";

function Button({ children, className }) {
  return <StyledButton className={className}>{children}</StyledButton>;
}

export default Button;
