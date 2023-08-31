"use client";
import React from "react";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalState/store";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { setMuted, setPlay } from "../GlobalState/features/PlayerSlice";

const SidebarPlayer = () => {
  const dispatch = useDispatch();
  const { isPlaying, muted, songTitle } = useSelector(
    (state: RootState) => state.Player
  );
  return (
    <>
      {songTitle && (
        <div className="flex items-center justify-between mt-4 border-[3px] border-white rounded-2xl  py-2 px-4 bg-gradient-to-r to-secondayShade_1 from-greenShade_2">
          {muted ? (
            <GiSpeakerOff
              onClick={() => dispatch(setMuted())}
              className="text-3xl text-black cursor-pointer"
            />
          ) : (
            <GiSpeaker
              onClick={() => dispatch(setMuted())}
              className="text-3xl text-black cursor-pointer"
            />
          )}

          <p>{songTitle}</p>
          <div
            onClick={() => dispatch(setPlay())}
            className="sm:flex md::flex lg:flex xl:flex items-center justify-center p-[2px] bg-black rounded-full text-seconday text-secondary cursor-pointer"
          >
            {isPlaying ? (
              <BsFillPauseFill size={18} />
            ) : (
              <BsFillPlayFill size={18} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarPlayer;
