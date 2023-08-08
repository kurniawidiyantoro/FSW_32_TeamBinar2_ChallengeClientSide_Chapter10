import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../action/userActions';

const initialState = {
  loading: false,
  email: typeof window !== 'undefined' ? localStorage.getItem('email') || '' : '',
  password: typeof window !== 'undefined' ? localStorage.getItem('password') || '' : '',
  error: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: '' };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, token: action.payload.token, email: action.payload.email, error: '' };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
