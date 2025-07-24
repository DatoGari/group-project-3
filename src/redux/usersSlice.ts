import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: [
    { id: 'u1', firstName: 'Alice', lastName: 'Smith', pid: '123', phoneNumber: '555-1111' },
    { id: 'u2', firstName: 'Bob', lastName: 'Johnson', pid: '456', phoneNumber: '555-2222' },
  ],
  reducers: {
    // You can add addUser, deleteUser later
  },
});

export default usersSlice.reducer;
