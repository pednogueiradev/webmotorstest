import React from "react";
import { Select, SelectLabel } from "./style.ts";

function SelectItems({ children, label, onChange, cols }) {
  return (
    <SelectLabel>
      <span>{label}</span>
      <Select name={label} onChange={onChange}>
        {children}
      </Select>
    </SelectLabel>
  );
}

export default SelectItems;
