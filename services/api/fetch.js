import request from "./index.js";

export const loadAllCountries = async () => {
  const allCountries = await request("/all");
  return allCountries;
};

export const loadAllEuropeCountries = async () => {
  const allEuropeCountries = await request("/region/europe");
  console.log("allEuropeCountries", allEuropeCountries);
  return allEuropeCountries;
};
