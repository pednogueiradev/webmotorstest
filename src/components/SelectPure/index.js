import React from "react";
import { Select, Options } from "./style.ts";

function SelectPure({ children, label, onChange }) {
  return (
    <Select name={label} onChange={onChange}>
      <Options value="">{label}</Options>
      {children}
    </Select>
  );
}

export default SelectPure;
