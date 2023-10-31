"use client";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { slides } from "../../public/ProjectData/slides";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

function HeroSlider() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="min-w-[35vw] h-full w-full relative group px-2">
      <Carousel
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        responsive={responsive}
        customLeftArrow={
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 text-white cursor-pointer bg-tertiary border-4 border-white">
            <BsChevronCompactLeft size={25} />
          </div>
        }
        customRightArrow={
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 right-0 text-white cursor-pointer bg-tertiary border-4 border-white">
            <BsChevronCompactRight size={25} />
          </div>
        }
      >
        {slides.map((item: any, i: any) => (
          <Image
            key={i}
            src={item.url}
            className="h-[40vh] sm:h-[50vh] md:h-[50vh] lg:h-[450px] xl:h-[500px] rounded-2xl object-cover max-w-full"
            height={2000}
            width={2000}
            alt={item.url}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default HeroSlider;
