import { combineReducers } from 'redux';

import titleReducer from './title.reducer';
import listReducer from './list.reducer';

const appReducer = combineReducers({
  list: listReducer,
  title: titleReducer
});

export default appReducer;
