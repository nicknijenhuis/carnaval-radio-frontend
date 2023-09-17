"use client";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { slides } from "../../public/ProjectData/slides";

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="min-w-[35vw] relative group px-2">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=" h-[40vh] md:w-full md:h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-5 text-2xl rounded-full p-2 text-white cursor-pointer bg-green border-4 border-white">
        <BsChevronCompactLeft onClick={prevSlide} size={25} />
      </div>
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-5 text-2xl rounded-full p-2  text-white cursor-pointer bg-green border-4 border-white">
        <BsChevronCompactRight onClick={nextSlide} size={25} />
      </div>
    </div>
  );
}

export default HeroSlider;
