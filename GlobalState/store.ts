"use client";
import { configureStore } from "@reduxjs/toolkit";
import TabReducer from "../GlobalState/features/TabSlice";

export const store = configureStore({
  reducer: {
    Tab: TabReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
