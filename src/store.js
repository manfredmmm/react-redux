import { createStore } from 'redux';
import appReducer from './app.reducer';

const initialState = {
  title: 'Arnau <3 David',
  number: 3,
  list: [
    {
      id: 0,
      name: 'Mixi',
      age: 10,
      votes: 10
    }, {
      id: 1,
      name: 'Grisa',
      age: 3,
      votes: 6
    }, {
      id: 2,
      name: 'Blanca',
      age: 8,
      votes: 7
    }
  ]
};

const store = createStore(appReducer, initialState);

export default store;
