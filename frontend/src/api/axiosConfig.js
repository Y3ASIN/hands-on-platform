import axios from "axios";

import { VITE_API_URI } from "../../config/env";

const axiosInstance = axios.create({
  baseURL: VITE_API_URI,
});

// Interceptor to add Authorization header if token exists
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.token = token; // Change from Authorization to token
  }
  return config;
});

export default axiosInstance;
