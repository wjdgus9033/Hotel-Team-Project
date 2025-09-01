import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', // Spring Boot 백엔드 주소
  withCredentials: true,
});

export default axiosInstance;
