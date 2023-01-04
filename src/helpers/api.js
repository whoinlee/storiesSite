import axios from "axios";
import mockData from "./data.json";

const url =
  "https://146a3axml6.execute-api.us-west-2.amazonaws.com/dev/data/services";

export const getDataHelper = async () => {
  const res = await axios.get(url);
  return res.data.services;
};

export const getMockData = async () => {
  return mockData;
};
