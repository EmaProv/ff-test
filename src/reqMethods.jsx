import axios from "axios";

const BASE_URL = "https://dummyjson.com/products?limit=20";

export const publicReq = axios.create({
  baseURL: BASE_URL,
});
