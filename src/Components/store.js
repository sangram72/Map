import { combineReducers } from 'redux';
import regionReducer from './regionReducer';
import { configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  region: regionReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
