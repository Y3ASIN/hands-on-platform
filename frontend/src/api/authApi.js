import axios from "./axiosConfig";

export const signUp = async (userData) => {
  const response = await axios.post("/auth/signup", userData);
  return response.data;
};

export const login = async (credentials) => {
  const response = await axios.post("/auth/signin", credentials);
  return response.data;
};
