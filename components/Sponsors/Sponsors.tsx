import Image from "next/image";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import SectionTitle from "../constants/SectionTitle";
import { RxDotFilled} from "react-icons/rx"

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
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    if (slider != null) {
      slider.scrollLeft = slider.scrollLeft - 90;
    }
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    if (slider != null) {
      slider.scrollLeft = slider.scrollLeft + 90;
    }
  };

  // const goToSponsor = (sponsorIndex) => {
  //   let slider = document.getElementById("slider");
  //   if (slider != null) {
  //     slider.scrollLeft = slider.scrollLeft + 90;
  //   }
  // }
  return (
    <div className=" text-black py-10 px-10">
      <SectionTitle title="Onze sponsoren" />
      <div className="relative flex items-center pt-10">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="cursor-pointer opacity-50 hover:opacity-100 text-black"
        />
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth space-x-10 scrollbar-hide"
        >
          {sponsorsData.map((sponsor, i) => (
            <Image
              key={i}
              width={200}
              height={200}
              className=" inline-block cursor-pointer border-2 border-[#FFA500] p-4 rounded-lg"
              src={sponsor.sponsorImage}
              alt={sponsor.sponsorName}
            />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="cursor-pointer opacity-50 hover:opacity-100 text-black"
        />
      </div>
      <div className="flex top-4 justify-center py-2">
        {sponsorsData.map((sponsor, SponsorIndex) => (
          <div key={SponsorIndex} className="text-2xl cursor-pointer">
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
