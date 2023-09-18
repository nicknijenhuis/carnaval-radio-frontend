"use client";
import { createSlice } from "@reduxjs/toolkit";

const PlayerSlice = createSlice({
  name: "Player",
  initialState: {
    songTitle: "",
    songUrl: "",
    isPlaying: false,
    muted: false,
  },
  reducers: {
    setMuted: (state) => {
      state.muted = !state.muted;
    },
    setsSongTitle: (state, action) => {
      state.songTitle = action.payload;
    },
    setPlay: (state) => {
      state.isPlaying = !state.isPlaying;
    },
  },
});

export const { setMuted, setsSongTitle, setPlay } = PlayerSlice.actions;
export type PlayerState = ReturnType<typeof PlayerSlice.reducer>;

export default PlayerSlice.reducer;