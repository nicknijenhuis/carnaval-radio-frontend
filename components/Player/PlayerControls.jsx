"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { GiSpeaker, GiSpeakerOff } from "react-icons//gi";
import { useDispatch, useSelector } from "react-redux";
import { setPlay, setMuted } from "../../GlobalState/features/PlayerSlice";

const PlayerControls = ({ currentTrack, audioElem, loading }) => {
  const dispatch = useDispatch();
  const { isPlaying, muted } = useSelector((state) => state.Player);

  const [showVolume, setShowVolume] = useState(false);
  const [volume, setVolume] = useState(30);

  useEffect(() => {
    if (audioElem) {
      audioElem.current.volume = volume / 100;
      audioElem.current.mute = muted;
    }
  }, [volume, muted]);
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row items-start sm:items-center gap-[2px] sm:gap-8 md:gap-8 lg:gap-8 xl:gap-8">
      <div className="flex items-center space-x-6">
        {!loading ? (
          <Image
            src={currentTrack.imageurl}
            alt={currentTrack.title}
            className="h-10 w-14 sm:h-16 md:h-16 lg:h-16 xl:h-16 sm:w-24 md:w-24 lg:w-24 xl:w-24 rounded-lg"
            width={120}
            height={70}
          />
        ) : (
          <div className="h-16 w-24 rounded-lg animate-pulse bg-white"></div>
        )}
        <>
          {!loading ? (
            <div className="flex items-start flex-col sm:hidden md::hidden lg:hidden xl:hidden">
              <h2 className="text-xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {currentTrack.title}
              </h2>
              <p className="text-xs">{currentTrack.artist}</p>
            </div>
          ) : (
            <div className="flex items-start flex-col sm:hidden md::hidden lg:hidden xl:hidden">
              <span className="p-2 h-3 w-4 bg-white rounded-lg"></span>
              <span className="p-2 h-2 w-2 bg-white rounded-lg"></span>
            </div>
          )}
        </>
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
      <div className="flex gap-4 items-end">
        {!loading ? (
          <div className="hidden items-start flex-col sm:flex md::flex lg:flex xl:flex">
            <h2 className="text-2xl font-bold  uppercase text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {currentTrack.title}
            </h2>
            <p className="text-xs">{currentTrack.artist}</p>
          </div>
        ) : (
          <div className="hidden items-start flex-col sm:flex md::flex lg:flex xl:flex">
            <span className="p-2 h-3 w-4 bg-white rounded-lg"></span>
            <span className="p-2 h-2 w-2 bg-white rounded-lg"></span>
          </div>
        )}
        <div className="hidden sm:flex md::flex lg:flex xl:flex items-center gap-8">
          <div className="flex items-center">
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
            <BsFillPauseFill
              size={35}
              className="h-6 w-6 sm:h-8 md:h-8 lg:h-8 xl:h-8 sm:w-8 md:w-8 lg:w-8 xl:w-8"
            />
          ) : (
            <BsFillPlayFill
              size={35}
              className="h-6 w-6 sm:h-8 md:h-8 lg:h-8 xl:h-8 sm:w-8 md:w-8 lg:w-8 xl:w-8"
            />
          )}
        </div>

        {/* progress track and sound for mobile */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex items-center justify-between">
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
