import axios from "axios";

export default axios.create({
  baseURL: "https://sdbnu46n32.execute-api.ap-south-1.amazonaws.com/dev",
  //   baseURL: process.env.API_URL,
  responseType: "json",
});
