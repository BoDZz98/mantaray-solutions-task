import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Event, EventsState } from "@/types";

const API_URL = "https://6790d7f9af8442fd7377fab0.mockapi.io/mantaryAPI/events";
const initialState: EventsState = {
  loading: false,
  error: null,
  events: [],
};

export const fetchEvents = createAsyncThunk(
  "fetchEvents",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const eventSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    updateEventSpots(state, action) {
      const event = action.payload.event as Event;
      const isRegistered = action.payload.isRegistered as boolean;
      const eventIndex = state.events.findIndex((e) => e.id === event.id);
      // console.log(eventIndex);
      if (eventIndex !== -1) {
        if (isRegistered) {
          state.events[eventIndex].spots += 1;
        } else {
          state.events[eventIndex].spots -= 1;
        }
        // state.events[eventIndex] = { ...event, spots: event.spots - 1 };
        // console.log(state.events[eventIndex]);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action: any) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const eventsAction = eventSlice.actions;

export default eventSlice.reducer;
