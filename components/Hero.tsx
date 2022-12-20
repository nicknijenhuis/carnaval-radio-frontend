import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-start justify-center h-[60vh] md:h-[80vh] space-y-10 bg-image bg-center text-gray-200 px-10 md:px-20 mt-20">
      <h1 className="text-4xl sm:text-6xl max-w-[60vw]">
        The most intractive Radio Station on the internet
      </h1>
      <p>
        Our advnced platform to launch, distribute, and grow you music with ease
      </p>
      <button
        onClick={() => alert("Hello")}
        className="primary-button text-white z-[2] cursor-pointer"
      >
        Start Listening
      </button>
    </section>
  );
};

export default Hero;

{
  /* <section className="flex flex-col mt-10 space-y-10 md:flex-row md:items-center md:justify-between h-full md:h-[85vh] w-[full] px-10 md:px-32 py-20 bg-[#FFFFD0] text-black max-w-[1280px] m-auto">
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
    </section> */
}
