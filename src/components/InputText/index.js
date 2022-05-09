import React, { useState, useEffect } from "react";
import { InputStyled, AutoComplete } from "./style.ts";
import webservices from "../../services/webservices";

function InputText({ label }) {
  const [city, setCity] = useState("");
  const [complete, setComplete] = useState();
  const [datacity, setDatacity] = useState([]);

  useEffect(() => {
    webservices.getIbgeDataStates().then((response) => {
      setDatacity(response);
    });
  }, []);

  const onChangeTargetValue = (text) => {
    let matches = [];

    if (text.length > 0) {
      matches = datacity.filter((ct) => {
        const regex = new RegExp(`${text}`, "gi");
        return ct.nome.match(regex);
      });
    }

    console.log("matches: ", matches);
    console.log(datacity);

    setComplete(matches);
    setCity(text);
  };

  const onComplete = (text) => {
    setCity(text);
    setComplete([]);
  };

  return (
    <>
      <InputStyled>
        <span>{label}</span>
        <input
          type="text"
          onChange={(e) => onChangeTargetValue(e.target.value)}
          value={city}
        ></input>
      </InputStyled>
      <AutoComplete>
        {complete &&
          complete.map((suggestions, i) => (
            <div key={i} onClick={() => onComplete(suggestions.nome)}>
              {suggestions.nome}
            </div>
          ))}
      </AutoComplete>
    </>
  );
}
export default InputText;
