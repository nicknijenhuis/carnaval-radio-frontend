import Image from "next/image";
import React from "react";
import { MdMusicNote } from "react-icons/md";
import Button from "../constants/Button";

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
    <div className="flex flex-col space-y-4 px-4 py-3 w-[90vw] md:w-0 min-w-[30vw] shadow-xl md:ml-5">
      <h2 className="text-center">Recent Songs</h2>
      <div className="space-y-2">
        {recentSongs.map((recentSong, i) => (
          <div key={i} className="flex items-center justify-between">
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
       <Button text="View More" />
    </div>
  );
};

export default HeroSongs;
