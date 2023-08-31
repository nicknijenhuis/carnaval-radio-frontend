"use client";
import { configureStore } from "@reduxjs/toolkit";
import TabReducer from "../GlobalState/features/TabSlice";
import PlayerReducer from "../GlobalState/features/PlayerSlice";
import ThemeReducer from "../GlobalState/features/themeSlice";

export const store = configureStore({
  reducer: {
    Theme: ThemeReducer,
    Tab: TabReducer,
    Player: PlayerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
