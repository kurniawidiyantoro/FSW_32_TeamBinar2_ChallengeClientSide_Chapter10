const initialState = {
  user: {},
  email: '',
  // email: typeof window !== 'undefined' ? localStorage.getItem('email') || '' : '',
  // password: typeof window !== 'undefined' ? localStorage.getItem('password') || '' : '',
  error: ''
  };

  export function reducer (state = initialState, action) {
    switch (action.type) {
      case 'SET_USER':
        return {...state, user: action.payload.user, email: action.payload.email};
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_PLAYED_GAMES':
        return { ...state, ...action.payload };
      case 'LOGIN_REQUEST':
        return { ...state, loading: true, error: '' };
      case 'LOGIN_SUCCESS':
        return { ...state, loading: false, token: action.payload.token, email: action.payload.email, error: '' };
      case 'LOGIN_FAILURE':
        return { ...state, loading: false, error: action.payload };  
      default:
        return state;
    }
  };
