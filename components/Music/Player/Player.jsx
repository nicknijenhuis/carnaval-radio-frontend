import React, { useState, useEffect, useRef } from "react";
import PlayerControls from "./PlayerControls";
import { tracksData } from "./Tracks";
import { useDispatch, useSelector } from "react-redux";
import { setsSongTitle } from "../../../GlobalState/features/PlayerSlice";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_STREAM_DATA } from "../../../graphql/stream_queries";

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_STRAPI_URL;
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getServerSideProps() {
  return {
    props: {
      stream: stream,
    },
  };
}

const Player = ({ themeData }) => {
  const dispatch = useDispatch();
  const [tracks, setTracks] = useState(tracksData);
  const { isPlaying, muted } = useSelector((state) => state.Player);
  const [currentTrack, setCurrentTrack] = useState(tracksData[0]);
  const audioElem = useRef();
  const [stream, setStream] = useState();

  const getStream = async () => {
    const { data: stream } = await client.query({
      query: GET_STREAM_DATA,
    });
    console.log(stream);
    setStream(stream);
  };
  useEffect(() => {
    getStream();
  }, []);

  dispatch(setsSongTitle(currentTrack.title));

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  });

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const currentTime = audioElem.current.currentTime;

    setCurrentTrack({
      ...currentTrack,
      progress: (currentTime / duration) * 100,
      length: duration,
    });
  };

  const link = stream.streams.data[0].attributes.Link;
  console.log(link);
  return (
    <div className="ml-0 sm:ml-0 md:ml-[240px] lg:ml-[250px] xl:ml-[250px] z-50 bg-[#f6f6f6] w-full h-fit sm:h-[5rem] md:h-[5rem] lg:h-[5rem] xl:h-[5rem] fixed bottom-0 px-4 sm:px-4 md:px-20 lg-px-24 xl:px-24 py-1">
      <audio
        src={currentTrack.url}
        ref={audioElem}
        muted={muted}
        onTimeUpdate={onPlaying}
      />
      <PlayerControls
        tracks={tracks}
        audioElem={audioElem}
        setTracks={setTracks}
        currentTrack={currentTrack}
        setCurrentTrack={setCurrentTrack}
        themeData={themeData}
      />
    </div>
  );
};

export default Player;
