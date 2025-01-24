import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./data-slice";
import userReducer from "./user-slice";

export const store = configureStore({
  reducer: {
    events: eventReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


/* 
1- try registering an event
2- show validation
3- login with invalid cred, then valid
4- show empty dashboard, pagination
5- show free event with no spots and speakers
6- show real event and register

*/