import apiConfig from "./config.js";

const request = async (endpoint) => {
  try {
    const response = await fetch(`${apiConfig.baseURL}${endpoint}`, {
      method: "GET",
      headers: apiConfig.headers,
    });

    if (!response.ok) {
      let errorType = "Unknown Error";

      if (response.status >= 400 && response.status < 500) {
        errorType = "Client Error, you might have done something wrong";
      } else if (response.status >= 500 && response.status < 600) {
        errorType = "Server Error, not your fault";
      }

      throw new Error(
        `HTTP Error: ${response.status} Saying: ${response.statusText} Error Type: ${errorType}`
      );
    }

    return await response.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export default request;
