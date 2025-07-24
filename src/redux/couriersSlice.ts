import { createSlice } from '@reduxjs/toolkit';

const couriersSlice = createSlice({
  name: 'couriers',
  initialState: [
    {
      id: 'c1',
      firstName: 'Charlie',
      lastName: 'Courier',
      phoneNumber: '555-3333',
      vehicle: 'Bike',
      workingDays: {
        monday: { start: '09:00', end: '17:00' },
        tuesday: { start: '10:00', end: '18:00' },
      },
      busyTimes: [ // when users have called
        { userId: 'u1', day: 'monday', time: '10:30' },
      ],
    },
  ],
  reducers: {
    // addCourier, deleteCourier, updateSchedule etc.
    updateWorkingHours: (state, action) => {
    const { courierId, day, start, end } = action.payload;
    const courier = state.find(c => c.id === courierId);
    if (courier) {
      courier.workingDays[day] = { start, end };
    }
  },
  },
});

export const { updateWorkingHours } = couriersSlice.actions;
export default couriersSlice.reducer;
