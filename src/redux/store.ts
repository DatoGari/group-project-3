import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import roleReducer from './roleSlice';
import authReducer from './authSlice'; // ✅

export const store = configureStore({
  reducer: {
    form: formReducer,
    role: roleReducer,
    auth: authReducer, // ✅
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
