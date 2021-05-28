import axios from "axios";

const api = axios.create({
  baseURL:
    "https://raw.githubusercontent.com/eemr3/recurso-portifolio/main/api",
});

export default api;
