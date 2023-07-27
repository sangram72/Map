


import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import store from './Components/store';
import AppLayout from './Components/AppLayout';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
      <AppLayout />
    </Provider>
  </React.StrictMode>
);


