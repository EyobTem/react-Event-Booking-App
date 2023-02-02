import { createSlice } from '@reduxjs/toolkit';
import data from '../data/event.json';
const eventSlice = createSlice({
  name: 'event',
  initialState: data,
  reducers: {
    buyEvent(state, action) {
      const event = state.find((event) => event.id === action.payload.id);
      event.ticketsAvailable -= action.payload.attendeesList;
    },
  },
});
export const { buyEvent } = eventSlice.actions;
export default eventSlice.reducer;
