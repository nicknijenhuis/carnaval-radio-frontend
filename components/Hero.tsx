import Image from "next/image";
import React from "react";
import heroImg from "../public/assets/hero-img.jpg";

const Hero = () => {
  return (
    <section className="flex flex-col space-y-10 md:flex-row md:items-center md:justify-between h-full md:h-[85vh] w-[full] px-10 md:px-32 py-20 bg-[#FFFFD0] text-black">
      <div className="space-y-6 md:max-w-[40vw]">
        <h1>The most intractive Radio Station on the internet</h1>
        <p>
          Our advnced platform to launch, distribute, and grow you music with
          ease
        </p>
        <button className="primary-button">Start Listening</button>
      </div>
      <div>
        <Image
          src={heroImg}
          width={450}
          height={450}
          alt="hero image"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
