import request from "./index.js";

export const loadAllCountries = async () => {
    const allCountries = await request("/all");
    return allCountries;
};

export const loadAllEuropeCountries = async () => {
    const allCountries = await request("/region/europe");
    return allCountries;
};