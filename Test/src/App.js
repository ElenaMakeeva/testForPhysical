import React from 'react';

import { Provider } from 'react-redux';

import { store } from './store/index';

import Main from './screen/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
      <Main />
    </Provider>
    </BrowserRouter>
  );
}

export default App;
