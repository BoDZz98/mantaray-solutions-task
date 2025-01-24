import { Event, UserState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  user: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser(state, action) {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuth = false;
      state.user = null;
    },
    registerEvent(state, action) {
      const event = action.payload.event as Event;
      const isRegistered = action.payload.isRegistered as boolean;
      if (isRegistered) {
        // If event is registered, remove it
        state.user!.registeredEvents = state.user!.registeredEvents.filter(
          (e) => e.id !== event.id
        );
      } else {
        // If event isn't registered, add it
        state.user?.registeredEvents.push(event);
      }
    },
  },
});
export const userAction = userSlice.actions;
export default userSlice.reducer;
