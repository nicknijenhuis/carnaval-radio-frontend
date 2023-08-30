"use client";
import { createSlice } from "@reduxjs/toolkit";

const PlayerSlice = createSlice({
  name: "Player",
  initialState: {
    audioElem: "",
    songTitle: "",
    songUrl: "",
    isplaying: false,
    muted: false,
  },
  reducers: {
    setAudioElem: (state, action) => {
      state.audioElem = action.payload;
    },
    setMuted: (state) => {
      state.muted = !state.muted;
    },
    setRecentSong: (state, action) => {
      state.songTitle = action.payload;
    },
    setPlay: (state) => {},
  },
});

export const { setMuted } = PlayerSlice.actions;
export default PlayerSlice.reducer;
