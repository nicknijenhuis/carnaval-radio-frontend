import Image from "next/image";
import React from "react";
import HeroSlider from "./HeroSlider";
import HeroSongs from "./HeroSongs";

const Hero = () => {
  return <section className="flex flex-col md:flex-row min-h-fit p-4">
    <HeroSlider />
    <HeroSongs />
  </section>;
};

export default Hero;
