import axios from "axios";

import { API_BASE_URL } from "@shared/config/constants";

const youwidgetApi = axios.create({
  baseURL: API_BASE_URL,
});

export default youwidgetApi;
