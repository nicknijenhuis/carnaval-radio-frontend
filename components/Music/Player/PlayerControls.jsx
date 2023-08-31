"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GiSpeaker, GiSpeakerOff } from "react-icons//gi";
import { useDispatch, useSelector } from "react-redux";
import { setPlay, setMuted } from "../../../GlobalState/features/PlayerSlice";
import NowPlaying from "../Songs/NowPlaying";

const PlayerControls = ({
  currentTrack,
  audioElem,
  setCurrentTrack,
  tracks,
  themeData,
}) => {
  const dispatch = useDispatch();
  const { isPlaying, muted } = useSelector((state) => state.Player);
  const bg = themeData?.attributes?.BaseColor;
  const clickRef = useRef();

  const forwardSeekBar = (e) => {
    let width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const trackProgress = (offset / width) * 100;
    audioElem.current.currentTime = (trackProgress / 100) * currentTrack.length;
  };

  const skipBack = () => {
    const index = tracks.findIndex((x) => x.url == currentTrack.url);
    if (index == 0) {
      setCurrentTrack(tracks[tracks.length - 1]);
    } else {
      setCurrentTrack(tracks[index - 1]);
    }

    audioElem.current.currentTime = 0;
  };

  const skipNext = () => {
    const index = tracks.findIndex((x) => x.url == currentTrack.url);
    if (index == tracks.length - 1) {
      setCurrentTrack(tracks[0]);
    } else {
      setCurrentTrack(tracks[index + 1]);
    }

    audioElem.current.currentTime = 0;
  };

  // handle volume
  const [showVolume, setShowVolume] = useState(false);
  const [volume, setVolume] = useState(30);

  useEffect(() => {
    if (audioElem) {
      audioElem.current.volume = volume / 100;
      audioElem.current.mute = muted;
    }
  }, [volume, muted]);
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-start sm:items-center gap-2 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-8">
      <div className="flex items-center space-x-6">
        <Image
          src={currentTrack.trackCoverImage}
          alt={currentTrack.title}
          className="h-16 w-24 rounded-lg"
          width={120}
          height={70}
        />
        <div className="flex items-start flex-col sm:hidden md::hidden lg:hidden xl:hidden">
          <h2 className="text-xl font-semibold font-sans uppercase">
            {currentTrack.title}
          </h2>
          <p className="text-xs">{currentTrack.artist}</p>
          {/* <NowPlaying /> */}
        </div>
        <div
          className="hidden sm:flex md::flex lg:flex xl:flex items-center justify-center p-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white cursor-pointer"
          onClick={() => dispatch(setPlay())}
        >
          {isPlaying ? (
            <BsFillPauseFill size={35} />
          ) : (
            <BsFillPlayFill size={35} />
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="hidden items-start flex-col sm:flex md::flex lg:flex xl:flex">
          <h2 className="text-xl font-bold font-sans uppercase">
            {currentTrack.title}
          </h2>
          <p className="text-xs">{currentTrack.artist}</p>
          {/* <NowPlaying /> */}
        </div>
        <div className="hidden sm:flex md::flex lg:flex xl:flex items-center gap-8">
          <div className="flex  items-center gap-2 cursor-pointer">
            <Image
              className="rotate-180"
              src="/skip.png"
              onClick={skipBack}
              height={12}
              width={12}
              alt="skip"
            />
            <Image
              src="/skip.png"
              onClick={skipNext}
              height={12}
              width={12}
              alt="skip"
            />
          </div>
          <div className="min-w-[200px] sm:w-[250px] md:w-[300px] lg:w-[450px] xl:w-[500px] h-[6px] rounded-xl cursor-pointer bg-[#e3e3e3]">
            <div
              onClick={forwardSeekBar}
              ref={clickRef}
              className=" h-[100%] bg-[#64748b] rounded-xl"
              style={{ width: `${currentTrack.progress + "%"}` }}
            ></div>
          </div>
          <div className="flex">
            {muted ? (
              <GiSpeakerOff
                onClick={() => dispatch(setMuted())}
                onMouseMove={() => setShowVolume(!showVolume)}
                className="text-2xl text-[#64748b] cursor-pointer"
              />
            ) : (
              <GiSpeaker
                onClick={() => dispatch(setMuted())}
                onMouseMove={() => setShowVolume(!showVolume)}
                className="text-2xl text-[#64748b] cursor-pointer"
              />
            )}

            {showVolume && (
              <section className="">
                <input
                  className="cursor-pointer"
                  type="range"
                  min={0}
                  max={100}
                  step={0.02}
                  value={volume}
                  onChange={(event) => {
                    setVolume(event.target.valueAsNumber);
                  }}
                />
              </section>
            )}
          </div>
        </div>
      </div>

      {/* for mobile view */}
      <div className="flex items-start gap-4 sm:hidden md::hidden lg:hidden xl:hidden">
        {/* play button */}
        <div
          className="flex items-center justify-center p-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white cursor-pointer"
          onClick={() => dispatch(setPlay())}
        >
          {isPlaying ? (
            <BsFillPauseFill size={35} />
          ) : (
            <BsFillPlayFill size={35} />
          )}
        </div>

        {/* progress track and sound for mobile */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="w-[280px] h-[6px] rounded-xl cursor-pointer bg-[#e3e3e3]">
            <div
              onClick={forwardSeekBar}
              ref={clickRef}
              className="h-[100%] bg-[#64748b] rounded-xl"
              style={{ width: `${currentTrack.progress + "%"}` }}
            ></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                className="rotate-180"
                src="/skip.png"
                onClick={skipBack}
                height={12}
                width={12}
                alt="skip"
              />
              <Image
                src="/skip.png"
                onClick={skipNext}
                height={12}
                width={12}
                alt="skip"
              />
            </div>
            <div className="flex">
              {muted ? (
                <GiSpeakerOff
                  onClick={() => dispatch(setMuted())}
                  onMouseMove={() => setShowVolume(!showVolume)}
                  className="text-2xl text-[#64748b] cursor-pointer"
                />
              ) : (
                <GiSpeaker
                  onClick={() => dispatch(setMuted())}
                  onMouseMove={() => setShowVolume(!showVolume)}
                  className="text-2xl text-[#64748b] cursor-pointer"
                />
              )}

              <section className="">
                <input
                  className="cursor-pointer"
                  type="range"
                  min={0}
                  max={100}
                  step={0.02}
                  value={volume}
                  onChange={(event) => {
                    setVolume(event.target.valueAsNumber);
                  }}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerControls;
