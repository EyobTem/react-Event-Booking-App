import { configureStore } from '@reduxjs/toolkit';
import eventReducer from './eventReducer';
const store = configureStore({
  reducer: {
    event: eventReducer,
  },
});
export default store;
