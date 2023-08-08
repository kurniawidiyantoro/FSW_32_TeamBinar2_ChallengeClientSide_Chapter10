import { legacy_createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/reducers'; // Import the root reducer you'll create later

const initialState = {}; // Define your initial state here



const store = legacy_createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)
);

export default store;
