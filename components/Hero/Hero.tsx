import Image from "next/image";
import React from "react";
import HeroSlider from "./HeroSlider";
import HeroSongs from "./HeroSongs";

const Hero = () => {
  return (
    <section className="grid gap-2 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 min-h-fit p-8 bg-[#f9f9f9]">
      <HeroSlider />
      <HeroSongs />
    </section>
  );
};

export default Hero;
