export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  phone: string;
  location: {
    country: string;
  };
  picture: {
    large: string;
  };
}

export interface ApiResponse {
  results: User[];
}
