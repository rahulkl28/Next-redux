import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/UserSlices';

const store = configureStore({
  reducer: {
    user: userReducer,
  }
  
 
});

export default store;
