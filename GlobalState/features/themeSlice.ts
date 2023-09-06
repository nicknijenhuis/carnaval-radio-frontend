"use client";
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    themeData: <any>{},
  },
  reducers: {
    getThemeData: (state, action) => {
      state.themeData = action.payload;
    },
  },
});

export const { getThemeData } = themeSlice.actions;
export default themeSlice.reducer;
