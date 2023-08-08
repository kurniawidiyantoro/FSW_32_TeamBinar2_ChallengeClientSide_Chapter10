import Axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action Creators
export const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

export const loginSuccess = (token, email) => ({
  type: LOGIN_SUCCESS,
  payload: { token, email },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Async Action to perform login
export const loginUser = (email, password) => async (dispatch) => {
  dispatch(loginRequest());

  try {
    const response = await Axios.post('http://localhost:3005/login', {
      email,
      password,
    });

    const { token, email: userEmail } = response.data;

    localStorage.setItem('token', token);
    localStorage.setItem('email', userEmail);

    dispatch(loginSuccess(token, userEmail));
    
  } catch (error) {
    const errorMessage = error.response ? error.response.data.message : 'An error occurred';
    dispatch(loginFailure(errorMessage));
  }
};
