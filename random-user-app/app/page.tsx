import { UserProvider } from '../context/UserContext';
import SearchableDropdown from '../components/SearchableDropdown';
import UserCard from '../components/UserCard';
import { ApiResponse, User } from '../types/user';
import { fetchUsers } from '../lib/api';

export default async function Home() {
  let users: User[] = [];
  let isLoading = true;

  try {
    const data: ApiResponse = await fetchUsers();
    users = data.results;
    isLoading = false;
  } catch (error) {
    console.error('Failed to fetch users:', error);
    isLoading = false;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <UserProvider users={users}>
      <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-12 text-center">
          Random User App
        </h1>
        <div className="w-full max-w-md mb-10">
          <SearchableDropdown />
        </div>
        <div className="w-full">
          <UserCard />
        </div>
      </div>
    </UserProvider>
  );
}
