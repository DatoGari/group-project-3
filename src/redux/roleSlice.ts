import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface RoleState {
  selectedRole: string | null;
}

const initialState: RoleState = {
  selectedRole: null,
};

const roleSlice = createSlice({
  name: 'role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.selectedRole = action.payload;
    },
    clearRole: (state) => {
      state.selectedRole = null;
    },
  },
});

export const { setRole, clearRole } = roleSlice.actions;
export default roleSlice.reducer;
