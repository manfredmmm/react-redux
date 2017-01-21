import React from 'react';
import { Provider } from 'react-redux';

import HeaderComponent from './header.component';
import CatsListComponent from './catslist.component';
import CatsCounterComponent from './cats_counter.component';

import store from './store';

const AppComponent = () => (
  <Provider store={store}>
    <div>
      <HeaderComponent />
      <CatsListComponent />
      <CatsCounterComponent />
    </div>
  </Provider>
);

export default AppComponent;
