interface User {
  login: string;
  pass: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User;
}