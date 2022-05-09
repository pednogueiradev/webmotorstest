import React, { useEffect, useState } from "react";
import Checkbox from "../Checkbox";
import SelectItems from "../SelectItems";
import InputText from "../InputText";
import SelectPure from "../SelectPure";
import Button from "../Button";
import { TabList, FormSearch } from "./style.ts";
import { Container, Row, RowFlexStart } from "../../styles/global.ts";
import webservices from "../../services/webservices";

function Form() {
  const [make, setMake] = useState(["Escolha"]);
  const [model, setModel] = useState([""]);
  const [version, setVersion] = useState([""]);

  const years = ["2010", "2011", "2012", "2013", "2014", "2015"];
  const prices = [
    "R$10,000 a R$20,000",
    "R$20,000 a R$30,000",
    "R$30,000 a R$40,000",
    "R$40,000 a R$50,000",
  ];

  const clearFilters = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const submitFilters = (e) => {
    e.preventDefault();
    console.log("submitFilters");
  };

  // SET MAKES
  useEffect(() => {
    webservices.getDataMakes().then((response) => {
      setMake(response);
    });
  }, []);

  // SET MODELS ONCHANGE MAKES
  const handleModels = async (e) => {
    const id = e.target.selectedIndex;

    webservices.getDataModels(id).then((response) => {
      setModel(response);
    });
  };

  // SET VERSIONS ONCHANGE MODELS
  const handleVersions = async (e) => {
    const id = e.target.selectedIndex;

    webservices.getDataVersion(id).then((response) => {
      setVersion(response);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
  };

  return (
    <Container>
      <Row>
        <TabList>
          <li className="active car">
            Comprar
            <strong>CARROS</strong>
          </li>
          <li className="bike">
            Comprar
            <strong>MOTOS</strong>
          </li>
        </TabList>
        <Button className="secondary">Vender meu carro</Button>
      </Row>
      <FormSearch onSubmit={onSubmit}>
        <RowFlexStart>
          <Checkbox label="Novo" />
          <Checkbox label="Usado" />
        </RowFlexStart>
        <Row>
          <InputText label="Onde:" />

          <SelectItems label="Marca: " onChange={handleModels}>
            <option value="*">Todas</option>
            {make.map((option) => (
              <option key={option.ID} id={option.ID}>
                {option.Name}
              </option>
            ))}
          </SelectItems>
          <SelectItems label="Modelo: " onChange={handleVersions}>
            {model.map((option) => (
              <option key={option.ID} id={option.ID}>
                {option.Name}
              </option>
            ))}
          </SelectItems>
        </Row>
        <Row>
          <SelectPure label="Ano desejado" className="flex-3">
            {years.map((option) => (
              <option>{option}</option>
            ))}
          </SelectPure>
          <SelectPure label="Faixa de preço" className="flex-3">
            {prices.map((option) => (
              <option>{option}</option>
            ))}
          </SelectPure>

          <SelectItems label="Versão: " className="flex-6">
            {version.map((option) => (
              <option key={option.ID} id={option.ID}>
                {option.Name}
              </option>
            ))}
          </SelectItems>
        </Row>
        <Row className="right alignCenter">
          <Button className="link" onClick={clearFilters}>
            Limpar filtros
          </Button>
          <Button onClick={submitFilters}>Ver ofertas</Button>
        </Row>
      </FormSearch>
    </Container>
  );
}

export default Form;
