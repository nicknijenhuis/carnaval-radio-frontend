import React from "react";

const Hero = () => {
  return (
    <section className="h-[85vh] w-[full] px-10 py-20 bg-yellow-100 text-black">
      <div className="space-y-5">
        <h1>
          The most
          <br /> intractive Radio Station
          <br /> on the internet
        </h1>
        <p>
          Our advnced platform to launch, distribute,
          <br /> and grow you music with ease
        </p>
        <button className="primary-button">Start Listening</button>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;
