// src/lib/apiClient.ts
import axios from 'axios';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!backendUrl) {
  console.error("Error: NEXT_PUBLIC_BACKEND_URL environment variable is not set.");
  // Depending on the desired behavior, you might throw an error here
  // or provide a default URL for development, though the former is safer.
  // throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined.");
}

const apiClient = axios.create({
  // Use the environment variable, or a fallback if you choose not to throw an error
  baseURL: backendUrl || 'http://localhost:3001/api/v1', // Example fallback - adjust if needed
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers if needed, e.g., authorization tokens
  },
  timeout: 10000, // Example timeout (10 seconds)
});

// Optional: Add interceptors for request/response handling (e.g., logging, error handling)
apiClient.interceptors.request.use(
  (config) => {
    // You can modify the request config here (e.g., add auth token)
    // console.log('Starting Request', config);
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // console.log('Response:', response);
    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    console.error('Response Error:', error.response || error.message);
    // Add more specific error handling here based on status codes if needed
    return Promise.reject(error);
  }
);


export default apiClient;
