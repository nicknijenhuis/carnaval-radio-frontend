import Image from "next/image";
import React from "react";
import { MdMusicNote } from "react-icons/md";
import { recentSongs } from "../../public/ProjectData/recentsongs";
import { recentTacks } from "../Music/Player/Tracks";

const HeroSongs = () => {
  const calcDate = (date: any) => {
    let milliseconds = date * 1000;
    console.log(date, milliseconds);

    var newDate = new Date(milliseconds);

    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();

    const formattedDate = `${day}/${month}/${year}`;

    console.log(formattedDate);

    return formattedDate;
  };
  return (
    <div className="flex flex-col space-y-4 p-8 rounded-xl min-w-[30vw] shadow-xl md:ml-5">
      <h2 className="text-center">Recent Songs</h2>
      <div className="space-y-2">
        {recentTacks.items.map((recentSong: any, i: any) => (
          <>
            {i < 4 && (
              <div key={i} className="flex items-center justify-between p-2">
                <div className="flex space-x-3">
                  <Image
                    className="h-9 w-9 rounded-full"
                    src={recentSong.enclosure.url}
                    alt={recentSong.title}
                    height={100}
                    width={100}
                  />
                  <div className="flex flex-col">
                    <div className="flex">
                      <MdMusicNote size={20} />
                      <p>{recentSong.title}</p>
                    </div>
                    {calcDate(recentSong.date)}
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
                    {recentSong.artist}
                  </p>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
      <button className="bg-gradient-to-r from-primary to-secondary rounded-lg py-3 px-4 text-white font-semibold">
        Alle gedraaide nummers
      </button>
    </div>
  );
};

export default HeroSongs;
