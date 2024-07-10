import {configureStore} from '@reduxjs/toolkit';
import thaliReducer from './Slices/ThaliSlice';

const store=configureStore({
  reducer:{
    thali: thaliReducer,
  },
});

export default store;

