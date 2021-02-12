import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID sKx4nluQlEDmynnVSIoz7dcuNw79zkig3X1kvRMNnIM",
  },
});
