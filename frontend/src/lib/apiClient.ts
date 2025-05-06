import axios from 'axios';

// TODO: Replace with environment variable later
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers here if needed, e.g., Authorization
  },
});

// Optional: Add interceptors for request/response handling (e.g., auth tokens, error logging)
// apiClient.interceptors.request.use(...);
// apiClient.interceptors.response.use(...);

export default apiClient;
