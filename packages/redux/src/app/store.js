import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '../todos/mainSlice';

export const store = configureStore({
  reducer: {
    tasks: mainReducer,
  },
});
