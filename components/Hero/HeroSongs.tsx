import Image from "next/image";
import React from "react";
import { MdMusicNote, MdKeyboardArrowRight } from "react-icons/md";

const recentSongs = [
  {
    songImg: "/assets/showcase-1.jpg",
    songTitle: "1000 Sterre",
    songArtist: "Bjorn & Mieke",
    songUpload: "2",
  },
  {
    songImg: "/assets/showcase-1.jpg",
    songTitle: "1000 Sterre",
    songArtist: "Bjorn & Mieke",
    songUpload: "2",
  },
  {
    songImg: "/assets/showcase-1.jpg",
    songTitle: "1000 Sterre",
    songArtist: "Bjorn & Mieke",
    songUpload: "2",
  },
  {
    songImg: "/assets/showcase-1.jpg",
    songTitle: "1000 Sterre",
    songArtist: "Bjorn & Mieke",
    songUpload: "2",
  },
  {
    songImg: "/assets/showcase-1.jpg",
    songTitle: "1000 Sterre",
    songArtist: "Bjorn & Mieke",
    songUpload: "2",
  },
];

const HeroSongs = () => {
  return (
    <div className="flex flex-col space-y-5 px-4 min-w-[30vw] shadow-xl ml-5">
      <h2 className="text-center">Recent Songs</h2>
      <div className="space-y-2">
        {recentSongs.map((recentSong) => (
          <div className="flex items-center justify-between">
            <div className="flex space-x-5">
              <Image
                src={recentSong.songImg}
                alt={recentSong.songTitle}
                height={50}
                width={50}
              />
              <div className="flex flex-col">
                <div className="flex">
                  <MdMusicNote size={20} />
                  <p>{recentSong.songTitle}</p>
                </div>
                <p className="text-xs">{recentSong.songUpload} minutes ago</p>
              </div>
            </div>
            <div>
              <p className="text-sm">{recentSong.songArtist}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="self-end flex items-center space-x-1 bg-[#FFA500] px-2 rounded-full">
        <p>View More</p> <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default HeroSongs;
