import axios from 'axios';

export const api = axios.create({
  baseURL: '',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// The session cookie is httpOnly, so the browser only learns it is missing or
// expired from a 401. Send the user to the login page when that happens.
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      typeof window !== 'undefined' &&
      error?.response?.status === 401 &&
      window.location.pathname !== '/login'
    ) {
      window.location.assign('/login');
    }
    return Promise.reject(error);
  }
);
