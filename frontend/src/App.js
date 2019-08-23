import React from 'react';
import { Provider } from 'react-redux';

import './config/reactotronConfig';
import store from './store';

import 'assets/css/index.css';

function App() {
  return (
    <Provider store={store}>
      <div />
    </Provider>
  );
}

export default App;