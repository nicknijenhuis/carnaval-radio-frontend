import React from "react";
import Image from "next/image";
import { color } from "@/public/ProjectData/color";
const SongCover = ({ url, artist, type = "hero" }) => {
  const nocover =
    "https://ams1.reliastream.com/static/scarna00/covers/nocover.png";

  const words = artist.match(/\b\w+\b/g);

  const letters = words
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
  // const result = letters.join("");
  return (
    <>
      {url == nocover ? (
        <div
          style={{ backgroundColor: color[artist] }}
          className={`${
            type == "hero"
              ? "h-12 w-12 sm:h-14 md:h-14 lg:h-14 xl:h-14 sm:w-14 md:w-14 lg:w-14 xl:w-14"
              : "sm:h-16 md:h-16 lg:h-16 xl:h-16 sm:w-16 md:w-16 lg:w-16 xl:w-16"
          } rounded-md flex items-center justify-center`}
        >
          <h3 className="text-xl font-semibold text-white">{letters}</h3>
        </div>
      ) : (
        <Image
          className={`${
            type == "hero"
              ? "h-12 w-12 sm:h-14 md:h-14 lg:h-14 xl:h-14 sm:w-14 md:w-14 lg:w-14 xl:w-14"
              : "h-16 w-16 sm:h-16 md:h-16 lg:h-16 xl:h-16 sm:w-16 md:w-16 lg:w-16 xl:w-16"
          }   rounded-md`}
          src={url}
          alt={artist}
          height={100}
          width={100}
        />
      )}
    </>
  );
};

export default SongCover;
