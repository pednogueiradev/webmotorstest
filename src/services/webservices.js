/* eslint-disable import/no-anonymous-default-export */
import api from "../config/api";

export const getDataMakes = async () => {
  const { data } = await api.get("/api/OnlineChallenge/Make/");
  return data;
};

export const getDataModels = async (id) => {
  const { data } = await api.get(`/api/OnlineChallenge/Model?MakeID=${id}`);
  return data;
};

export const getDataVersion = async (id) => {
  const { data } = await api.get(`/api/OnlineChallenge/Version?ModelID=${id}`);
  return data;
};

export const getIbgeDataStates = async () => {
  const { data } = await api.get(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/`
  );
  return data;
};

export default {
  getDataMakes,
  getDataModels,
  getDataVersion,
  getIbgeDataStates,
};
