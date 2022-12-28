import React from "react";
import MusicCard from "./MusicCard";

const MusicComponent = () => {
  return (
    <div className="bg-image px-5 md:px-10 2xl:px-48">
      <div className="flex flex-row items-center justify-between">
        <h1 className="bg-black text-white px-2 py-1 text-4xl uppercase">
          Music
        </h1>
        <button className="bg-white text-black px-2 py-1 uppercase text-sm">
          View More
        </button>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
       gap-3 md:gap-6 p-2 md:p-6 max-w-[1280px] m-auto px-5 md:px-0"
      >
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </div>
  );
};

export default MusicComponent;
