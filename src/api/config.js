import axios from "axios";
const BASE_URL = "https://pokemonstore.onrender.com";

const api = axios.create({
    baseURL: BASE_URL,
});

api.interceptors.request.use(function (config) {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
        "token"
    )}`;
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });
  
export default api;