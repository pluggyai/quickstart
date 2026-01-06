import axios from 'axios';

export const api = axios.create({
  baseURL: '',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

if (process.env.NODE_ENV === 'development') {
  api.interceptors.request.use((config) => {
    return config;
  });
}