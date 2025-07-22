import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  role: 'admin' | 'user' | 'courier' | null;
  userId: string | null;
}

const initialState: AuthState = {
  role: null,
  userId: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ role: AuthState['role'], userId: string }>) => {
      state.role = action.payload.role;
      state.userId = action.payload.userId;
    },
    logout: (state) => {
      state.role = null;
      state.userId = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

