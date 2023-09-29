"use client";
import Image from "next/image";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdMusicNote } from "react-icons/md";
import { BsFileMusicFill } from "react-icons/bs";
import RecentSongsLoading from "@/components/LoadingSkeleten/RecentSongsLoading";
import { Indie } from "../fonts/font";
import DateAndTime from "@/components/DateAndTime";
import { splitTitle } from "@/helpers/utils";
import RecentSongs from "@/components/RecentSongs";

const page = () => {
  const [recentTracks, setRecentTracks] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Boolean>(false);

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
    document.title = "Recente nummers | 24/7 Vasteloavend Muzieek";
    fetchTracks();
    const interval = setInterval(fetchTracks, 60000);
    return () => clearInterval(interval);
  }, [error]);
  return (
    <div className="p-10">
      <div className="flex items-center gap-2 mb-4">
        <BsFileMusicFill className="text-2xl text-secondary" />
        <h2 className={`text-center text-2xl font-semibold ${Indie.className}`}>
          Gedraaide nummers
        </h2>
      </div>
      <RecentSongs loading={loading} recentTracks={recentTracks} />      
    </div>
  );
};

export default page;
