import axios from 'axios';
import URL from './apiConstant';

const axiosInstance = axios.create({
  baseURL: URL.ROOT(),
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response, // Pass through the response if there's no error
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('wrapper message');
      // Optional: Redirect to login page or handle token expiration
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
