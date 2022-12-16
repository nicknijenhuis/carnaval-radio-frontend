import Image from "next/image";
import React from "react";

const sponsorsData = [
  {
    sponsorName: "Plus",
    sponsorImage: "/assets/sponsors/sponsor-1.png",
  },
  {
    sponsorName: "Heijnens",
    sponsorImage: "/assets/sponsors/sponsor-2.png",
  },
  {
    sponsorName: "Brikke Oave",
    sponsorImage: "/assets/sponsors/sponsor-3.png",
  },
  {
    sponsorName: "Rumpener hof",
    sponsorImage: "/assets/sponsors/sponsor-4.png",
  },
  {
    sponsorName: "Ops Advies",
    sponsorImage: "/assets/sponsors/sponsor-5.png",
  },
];

const Sponsors = () => {
  return (
    <section className="bg-white text-black py-10">
      <h1 className="text-center text-[#DC3535] text-2xl">Our Sponsors</h1>
      <div className="flex flex-row items-center justify-center space-x-16 md:space-x-20 px-10 md:px-32 pt-10">
        {sponsorsData.map((sponsor) => (
          <div> 
            <Image
              src={sponsor.sponsorImage}
              height={150}
              width={150}
              alt={sponsor.sponsorName}
            />
            <h2>{sponsor.sponsorName}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
