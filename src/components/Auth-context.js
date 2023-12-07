import { createContext, useContext, useReducer, useEffect  } from 'react';

const AuthContext = createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        isAuthenticated: true,
        user: action.payload.user,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check sessionStorage for saved authentication state on app mount
    const storedAuth = sessionStorage.getItem('auth');
    if (storedAuth) {
      dispatch({
        type: 'LOGIN',
        payload: {
          user: JSON.parse(storedAuth).user,
        },
      });
    }
  }, []);

  useEffect(() => {
    // Save authentication state to sessionStorage whenever it changes
    sessionStorage.setItem('auth', JSON.stringify({ user: state.user }));

    // Save authentication state to localStorage for persistence
    localStorage.setItem('auth', JSON.stringify({ user: state.user }));
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};