import React, { useState, useEffect, useRef } from "react";
import PlayerControls from "./PlayerControls";
import { tracksData } from "./Tracks";
import { setAudioElem } from "../../../GlobalState/features/PlayerSlice";

const Player = ({ themeData }) => {
  const [tracks, setTracks] = useState(tracksData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(tracksData[0]);
  const [muted, setMuted] = useState(false);
  const audioElem = useRef();

  useEffect(() => {
    setAudioElem(audioElem);
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
    <div className="z-50 bg-[#f6f6f6] w-full h-fit sm:h-[5rem] md:h-[5rem] lg:h-[5rem] xl:h-[5rem] fixed bottom-0 px-4 sm:px-4 md:px-20 lg-px-24 xl:px-24 py-1">
      <audio
        src={currentTrack.url}
        ref={audioElem}
        muted={muted}
        onTimeUpdate={onPlaying}
      />
      <PlayerControls
        tracks={tracks}
        muted={muted}
        setMuted={setMuted}
        setTracks={setTracks}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioElem={audioElem}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        themeData={themeData}
      />
    </div>
  );
};

export default Player;
