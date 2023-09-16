"use client";
import React, { useState, useEffect, useRef } from "react";
import PlayerControls from "./PlayerControls";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_STREAM_DATA } from "@/GlobalState/ApiCalls/graphql/stream_queries";

const Player = () => {
  const { isPlaying, muted } = useSelector((state) => state.Player);
  const [trackUrl, setTrackUrl] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);
  const audioElem = useRef();
  const [loading, setLoading] = useState(true);

  const fetchStream = async () => {
    const { data } = await client.query({
      query: GET_STREAM_DATA,
    });

    setTrackUrl(data.streams.data[0].attributes.Link);
  };

  const updateTrackInfo = () => {
    if (currentTrack.artist === "Unknown") {
      setCurrentTrack({ ...currentTrack, artist: "Wete veer neet" });
    }
    if (currentTrack.title === "Unknown") {
      setCurrentTrack({ ...currentTrack, title: "Wete veer neet" });
    }
  };

  const fetchTrackData = async () => {
    try {
      const response = await axios.get(
        "https://ams1.reliastream.com/rpc/scarna00/streaminfo.get"
      );
      setCurrentTrack(response.data.data[0].track);
      setLoading(false);
    } catch (error) {
      console.log("something went wrong");
    }
  };
  useEffect(() => {
    fetchStream();
    fetchTrackData();
    const interval = setInterval(fetchTrackData, 30000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioElem.current?.play();
    } else {
      audioElem.current?.pause();
    }
  });

  currentTrack && updateTrackInfo();

  return (
    <div className="z-[1000] bg-[#f6f6f6] w-full h-fit fixed bottom-0 px-4 sm:px-4 md:px-20 lg-px-24 xl:px-24 py-1 sm:py-2 md:py-3 lg:py-3 xl:py-3">
      {trackUrl && (
        <>
          <audio src={trackUrl} ref={audioElem} muted={muted} />
          <PlayerControls
            audioElem={audioElem}
            currentTrack={currentTrack}
            loading={loading}
          />
        </>
      )}
    </div>
  );
};

export default Player;
