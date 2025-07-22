import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  data: Record<string, any>;
}

const initialState: FormState = {
  data: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action: PayloadAction<{ name: string; value: any }>) => {
      state.data[action.payload.name] = action.payload.value;
    },
    resetForm: (state) => {
      state.data = {};
    },
  },
});

export const { updateField, resetForm } = formSlice.actions;
export default formSlice.reducer;
