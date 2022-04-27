import React from 'react';

import { Provider } from 'react-redux';

import { store } from './store/index';

import Navigation from './screen/Navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Navigation />
    </Provider>
    </BrowserRouter>
  );
}

export default App;
