import axios from "axios";

export const getProduct = async () => {
  return await axios.get(`${process.env.REACT_APP_DB_HOST}:${process.env.REACT_APP_DB_PORT}/api/products`);
};