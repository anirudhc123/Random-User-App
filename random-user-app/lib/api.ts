import axios from 'axios';
import { ApiResponse } from '../types/user';

export async function fetchUsers(): Promise<ApiResponse> {
  const maxRetries = 3;
  const timeout = 5000; // 5 seconds

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await axios.get('https://randomuser.me/api/?results=100', {
        timeout,
      });
      return response.data;
    } catch (error) {
      if (attempt === maxRetries) {
        console.error('API fetch failed after retries:', error);
        return { results: [] }; // Fallback empty array
      }
      await new Promise((resolve) => setTimeout(resolve, 1000 * attempt)); // Exponential backoff
    }
  }
  return { results: [] }; // Fallback for TypeScript
}
