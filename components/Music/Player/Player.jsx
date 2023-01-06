import React, { useState, useEffect, useRef } from "react";
import PlayerControls from "./PlayerControls";
import { tracksData } from "./Tracks";

const Player = () => {
  const [tracks, setTracks] = useState(tracksData);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(tracksData[0]);
  const audioElem = useRef();

  useEffect(() => {
    if(isPlaying){
        audioElem.current.play()
    }else{
        audioElem.current.pause()
    }
  })

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const currentTime = audioElem.current.currentTime;

    setCurrentTrack({...currentTrack, "progress": currentTime / duration * 100, "length": duration})
  }

  return (
    <div>
        <audio src={currentTrack.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <PlayerControls
        tracks={tracks}
        setTracks={setTracks}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        audioElem={audioElem}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
      />
    </div>
  );
};

export default Player;
