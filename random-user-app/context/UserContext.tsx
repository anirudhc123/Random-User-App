"use client";
import { createContext, useContext, ReactNode, useState } from 'react';
import { User } from '../types/user';

interface UserContextType {
  users: User[];
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({
  children,
  users,
}: {
  children: ReactNode;
  users: User[];
}) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ users, selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}

// File: lib/api.ts
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