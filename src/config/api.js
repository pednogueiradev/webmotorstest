import axios from "axios";

const baseUrl = "/";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
