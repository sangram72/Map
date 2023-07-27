import React from 'react';
import { Provider } from 'react-redux';
import store from './Components/store';
import AppLayout from './AppLayout';

const App = () => {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
};

export default App;
