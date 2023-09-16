import Image from "next/image";
import React, { useEffect, useState, Fragment } from "react";
import { MdMusicNote } from "react-icons/md";
import { BsFileMusicFill } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import RecentSongsLoading from "../LoadingSkeleten/RecentSongsLoading";

const HeroSongs = () => {
  const [recentTracks, setRecentTracks] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Boolean>(false);

  const formatDateTime = (timestamp: number) => {
    const CET_OFFSET = 6 * 3600; // 6 hours in seconds
    const currentDate = new Date();
    const formattedTimestamp = new Date((timestamp - CET_OFFSET) * 1000);

    const options: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
    };

    const isToday =
      currentDate.getDate() === formattedTimestamp.getDate() &&
      currentDate.getMonth() === formattedTimestamp.getMonth() &&
      currentDate.getFullYear() === formattedTimestamp.getFullYear();

    if (isToday) {
      return "Vandaag om " + formattedTimestamp.toLocaleTimeString("nl-NL", options); // Today
    }

    const isYesterday =
      currentDate.getDate() - 1 === formattedTimestamp.getDate() &&
      currentDate.getMonth() === formattedTimestamp.getMonth() &&
      currentDate.getFullYear() === formattedTimestamp.getFullYear();

    if (isYesterday) {
      return "Gisteren om " + formattedTimestamp.toLocaleTimeString("nl-NL", options); // Yesterday
    }

    options.day = "numeric";
    options.month = "long"; // Display full month name (e.g., "september")

    return formattedTimestamp.toLocaleTimeString("nl-NL", options);
  };

  const splitTitle = (title: string) => {
    const parts = title.split(" - ");
    if (parts.length === 2) {
      return {
        artist: parts[0],
        song: parts[1],
      };
    } else {
      return {
        artist: "Unknown",
        song: title,
      };
    }
  };

  const fetchTracks = async () => {
    try {
      const response = await axios.get(
        "https://ams1.reliastream.com/recentfeed/scarna00/json"
      );

      const modifiedTracks = response.data.items.map((item: any) => ({
        ...item,
        titleParts: splitTitle(item.title),
      }));

      setRecentTracks(modifiedTracks);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    fetchTracks();
    const interval = setInterval(fetchTracks, 30000);
    return () => clearInterval(interval);
  }, [error]);

  return (
    <div className="flex flex-col space-y-4 p-8 rounded-xl min-w-[30vw] shadow-lg md:ml-5">
      <div className="flex items-center justify-center gap-2">
        <BsFileMusicFill className="text-2xl text-secondary" />
        <h2 className="text-center text-2xl">Gedraaide nummers</h2>
      </div>
      <div className="space-y-2">
        {!loading ? (
          <>
            {recentTracks?.map((recentSong: any, i: any) => (
              <Fragment key={i}>
                {i < 4 && (
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between p-2">
                      <div className="flex space-x-3">
                        <Image
                          className="h-9 w-9 rounded-full"
                          src={recentSong.enclosure.url}
                          alt={recentSong.titleParts.song}
                          height={100}
                          width={100}
                        />
                        <div className="flex flex-col">
                          <div className="flex">
                            <MdMusicNote size={20} />
                            <p>{recentSong.titleParts.song}</p>
                          </div>
                          <span className="text-[16px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-secondary font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                            {recentSong.titleParts.artist}
                          </span>
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
                          {formatDateTime(recentSong.date)}
                        </p>
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-gray-200"></div>
                  </div>
                )}
              </Fragment>
            ))}
          </>
        ) : (
          <RecentSongsLoading />
        )}
      </div>
      <Link
        href="/recentSongs"
        className="bg-gradient-to-r text-center from-primary to-secondary rounded-lg py-3 px-4 text-white font-semibold"
      >
        Meer gedraaide nummers
      </Link>
    </div>
  );
};

export default HeroSongs;
