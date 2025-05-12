import axios from 'axios';
import { ApiResponse } from '../types/user';

export async function fetchUsers(): Promise<ApiResponse> {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=100');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
}
