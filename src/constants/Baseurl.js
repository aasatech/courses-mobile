import axios from 'axios';
import RegisterToken from '../constants/token/registerToken';
export const baseUrl = 'https://course-web-service.onrender.com/api/v1';
export const rootUrl = 'https://course-web-service.onrender.com';
export const Api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
