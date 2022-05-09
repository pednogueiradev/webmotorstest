import React from "react";
import { LabelCheckbox } from "./style.ts";

function Checkbox({ label }) {
  return (
    <LabelCheckbox>
      <input type="checkbox"></input>
      {label}
    </LabelCheckbox>
  );
}

export default Checkbox;
