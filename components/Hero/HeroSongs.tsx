import Image from "next/image";
import React from "react";
import { MdMusicNote } from "react-icons/md";

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
];

const HeroSongs = () => {
  return (
    <div className="flex flex-col space-y-4 p-8 rounded-xl min-w-[30vw] shadow-xl md:ml-5">
      <h2 className="text-center">Recent Songs</h2>
      <div className="space-y-2">
        {recentSongs.map((recentSong, i) => (
          <div key={i} className="flex items-center justify-between p-2">
            <div className="flex space-x-3">
              <Image
                className="h-9 w-9 rounded-full"
                src={recentSong.songImg}
                alt={recentSong.songTitle}
                height={100}
                width={100}
              />
              <div className="flex flex-col">
                <div className="flex">
                  <MdMusicNote size={20} />
                  <p>{recentSong.songTitle}</p>
                </div>
                <p className="text-xs">{recentSong.songUpload} minutes ago</p>
              </div>
            </div>
            <div
              className={`py-2 px-4 rounded-full ${
                i % 2 !== 0 ? "bg-greenShade_1" : "bg-secondayShade_1"
              }`}
            >
              <p
                className={`text-sm ${
                  i % 2 !== 0 ? "text-green" : "text-secondary"
                }`}
              >
                {recentSong.songArtist}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="bg-gradient-to-r from-primary to-secondary rounded-lg py-3 px-4 text-white font-semibold">
        Alle gedraaide nummers
      </button>
    </div>
  );
};

export default HeroSongs;
