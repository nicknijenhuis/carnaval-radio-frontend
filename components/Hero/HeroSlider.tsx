"use client";
import "react-multi-carousel/lib/styles.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import { Slide } from "@/types/slideTypes";

const HeroSlider = ({slides} : {slides:  Slide[]}) => {
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
        autoPlaySpeed={4000}
        infinite={true}
        shouldResetAutoplay={false}
        responsive={responsive}
        customLeftArrow={
          <ArrowFix>
            <div className="absolute ml-2 top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 text-white cursor-pointer bg-tertiary border-4 border-white opacity-70">
              <BsChevronCompactLeft size={25} />
            </div>
          </ArrowFix>
        }
        customRightArrow={
          <ArrowFix>
            <div className="absolute mr-2 top-[50%] -translate-x-0 translate-y-[-50%] text-2xl rounded-full p-2 right-0 text-white cursor-pointer bg-tertiary border-4 border-white opacity-70">
              <BsChevronCompactRight size={25} />
            </div>
          </ArrowFix>
        }
      >
        {slides.map((item: Slide, i: any) => (
          <Image
            key={i}
            loading="lazy"
            src={item.Image.Url}
            className="h-[40vh] sm:h-[50vh] md:h-[50vh] lg:h-[450px] xl:h-[500px] rounded-2xl object-cover max-w-full"
            height={1000}
            width={1000}
            alt={item.Image.Url}
          />
        ))}
      </Carousel>
    </div>
  );
}

const ArrowFix = (arrowProps: any) => { 
  const {carouselState, rtl, fetchPriority, children, ...restArrowProps} = arrowProps; 
  return ( <span {...restArrowProps}> {children} </span> ); 
};

export default HeroSlider;
