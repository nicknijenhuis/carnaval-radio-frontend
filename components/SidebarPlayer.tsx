import React from "react";
import { GiSpeaker } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../GlobalState/store";
import { setMuted } from "../GlobalState/features/PlayerSlice";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

const SidebarPlayer = () => {
  const dispatch = useDispatch();
  const { audioElem, isplaying, muted, songTitle } = useSelector(
    (state: RootState) => state.Player
  );
  return (
    <div className="flex items-center space-between mt-4 border-2 border-white rounded-lg  py-2 px-4 bg-gradient-to-r to-secondayShade_1 from-greenShade_2">
      <GiSpeaker
        onClick={() => dispatch(setMuted())}
        className="text-3xl text-black cursor-pointer"
      />
      <p>{songTitle}</p>
      <div className="hidden sm:flex md::flex lg:flex xl:flex items-center justify-center p-[2px] bg-black rounded-full text-seconday text-secondary">
        {isplaying ? (
          <BsFillPauseFill size={18} />
        ) : (
          <BsFillPlayFill size={18} />
        )}
      </div>
    </div>
  );
};

export default SidebarPlayer;
