import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice';
import roleReducer from './roleSlice';
<<<<<<< HEAD
import authReducer from './authSlice'; // ✅
=======
import authReducer from './authSlice'; 
import usersReducer from './usersSlice';
import couriersReducer from './couriersSlice';
>>>>>>> 7c4b1e5 (admin dashboard)

export const store = configureStore({
  reducer: {
    form: formReducer,
    role: roleReducer,
<<<<<<< HEAD
    auth: authReducer, // ✅
=======
    auth: authReducer,
   users: usersReducer,
couriers: couriersReducer,
>>>>>>> 7c4b1e5 (admin dashboard)
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
