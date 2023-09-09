"use client";
import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState, Fragment } from "react";
import { MdMusicNote } from "react-icons/md";
import { BsFileMusicFill } from "react-icons/bs";
import RecentSongsLoading from "@/components/LoadingSkeleten/RecentSongsLoading";

const page = () => {
  const [recentTracks, setRecentTracks] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Boolean>(false);

  const calcDate = (date: any) => {
    let milliseconds = date * 1000;

    var newDate = new Date(milliseconds);

    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();

    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  const calcTime = (date: any) => {
    let milliseconds = date * 1000;

    var newDate = new Date(milliseconds);

    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();

    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
  };

  const fetchTracks = async () => {
    try {
      const response = await axios.get(
        "https://ams1.reliastream.com/recentfeed/scarna00/json"
      );

      setRecentTracks(response.data.items);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    document.title = "Recent Songs | 24/7 Vasteloavend Muzieek";
    fetchTracks();
    const interval = setInterval(fetchTracks, 60000);
    return () => clearInterval(interval);
  }, [error]);
  return (
    <div className="p-10">
      <div className="flex items-center gap-2 mb-4">
        <BsFileMusicFill className="text-2xl text-secondary" />
        <h2 className="text-center text-2xl">Gedraaide nummers</h2>
      </div>{" "}
      <div className="space-y-2">
        {!loading ? (
          <>
            {" "}
            {recentTracks?.map((recentSong: any, i: any) => (
              <Fragment key={i}>
                <div className="flex flex-col">
                  <div className="flex items-center justify-between p-2">
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
                        {calcTime(recentSong.date)}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-200"></div>
                </div>
              </Fragment>
            ))}
          </>
        ) : (
          <RecentSongsLoading />
        )}
      </div>
    </div>
  );
};

export default page;
