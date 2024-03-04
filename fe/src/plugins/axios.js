import axios from 'axios'

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_URL,
    headers: {
      'Content-Type': 'application/json',
      'accept':'application/json'
    },
  });

  // Add a request interceptor
axios.interceptors.request.use(function (config) {
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  
export default instance;