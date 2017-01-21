import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import appReducer from './app.reducer';

const initialState = {
  title: 'Arnau <3 David',
  number: 3,
  list: []
};

const middlewares = [
  createLogger(),
  thunk
];

const store = createStore(
  appReducer,
  initialState,
  applyMiddleware(...middlewares)
);

export default store;
