import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: Record<string, any> | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<Record<string, any>>) {
      state.user = action.payload;
    },
    updateUserInfo(state, action: PayloadAction<Record<string, any>>) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
});

export const { setUser, updateUserInfo } = userSlice.actions;
export default userSlice.reducer;

