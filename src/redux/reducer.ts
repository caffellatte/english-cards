import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "./constants";
import { AuthState } from './AuthState'

interface AuthAction {
  type: string;
}

const getAuth = () => {
  if(localStorage.getItem('authApp') === 'true') {
    return true;
  }
  return false;
}

const initialState = {
  isAuthenticated: getAuth() || false,
  user: {login: 'admin', pass: 'admin'}
};

const AuthReducer = (state: AuthState = initialState, action: AuthAction) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem('authApp', 'true')
      return {...state, isAuthenticated: true};
    case LOGOUT_SUCCESS:
      localStorage.setItem('authApp', 'false')
      return {...state, isAuthenticated: false};
    default: 
      return state;
  }
};

export default AuthReducer;