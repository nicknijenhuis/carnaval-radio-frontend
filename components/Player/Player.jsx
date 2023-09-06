"use client";

import React, { useState, useEffect, useRef } from "react";
import PlayerControls from "./PlayerControls";
import { tracksData } from "./Tracks";
import { useDispatch, useSelector } from "react-redux";
import { setsSongTitle } from "@/GlobalState/features/PlayerSlice";

const Player = () => {
  const themeData = useSelector((state) => state.Theme.themeData);
  const dispatch = useDispatch();
  const [tracks, setTracks] = useState(tracksData);
  const { isPlaying, muted } = useSelector((state) => state.Player);
  const [currentTrack, setCurrentTrack] = useState(tracksData[0]);
  const audioElem = useRef();

  dispatch(setsSongTitle(currentTrack.title));

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  });

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const currentTime = audioElem.current.currentTime;

    setCurrentTrack({
      ...currentTrack,
      progress: (currentTime / duration) * 100,
      length: duration,
    });
  };

  return (
    <div className="z-40 bg-[#f6f6f6] w-full h-fit sm:h-[5rem] md:h-[5rem] lg:h-[5rem] xl:h-[5rem] fixed bottom-0 px-4 sm:px-4 md:px-20 lg-px-24 xl:px-24 py-1">
      <audio
        src={currentTrack.url}
        ref={audioElem}
        muted={muted}
        onTimeUpdate={onPlaying}
      />
      <PlayerControls
        tracks={tracks}
        audioElem={audioElem}
        setTracks={setTracks}
        currentTrack={currentTrack}
      />
    </div>
  );
};

export default Player;
