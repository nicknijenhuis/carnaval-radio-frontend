import React from "react";
import Sponsors from "./Sponsors";
import { AiFillPlayCircle, AiOutlinePlayCircle } from "react-icons/ai";
const HomeHeader = () => {
  return (
    <div className="mt-20 py-10 bg-black text-white px-5 md:px-10 2xl:px-48 flex flex-col md:flex-row md:justify-between md:items-center space-y-10 md:space-y-0">
      <div className="bg-transparent space-y-5">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-5">
          <AiFillPlayCircle size={70} color="#E63A3A" />
          <div>
            <p className="text-xs text-[#E63A3A]">NOW LIVE ON SLAM!</p>
            <h1 className="text-2xl">HOUSUH IN THE PAUZUH XL</h1>
            <p className="text-[#FACC15] text-sm">Housuh in the Pauzuh XL - SLAM!</p>
          </div>
        </div>
        <div className="space-y-5">
            <p>Also listen To:</p>
            <div className="hidden md:flex md:flex-row md:space-x-12 text-[12px]">
                <span>
                <AiOutlinePlayCircle size={40} color="#E63A3A" />
                SLAM! NON STOP
                </span>
                <span>
                <AiOutlinePlayCircle size={40} color="#E63A3A" />
                SLAM! NON STOP
                </span>
                <span>
                <AiOutlinePlayCircle size={40} color="#E63A3A" />
                SLAM! NON STOP
                </span>
            </div>
        </div>
      </div>
      <div className="bg-transparent">
        <div className="bg-white h-[12rem] md:w-[50rem] md:h-[15rem] overflow-hidden">
          <Sponsors />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
