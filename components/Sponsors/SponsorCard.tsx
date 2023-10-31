"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Sponsor } from "../../types/sponsorTypes";

interface Props {
  sponsors?: Sponsor[];
}

export default function SponsorCard({ sponsors }: Props) {
  const sponsorSorted = sponsors?.sort((a, b) => a.Order - b.Order);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="md:max-w-[72vw]">
      <Carousel
        showDots={true}
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
      >
        {sponsorSorted &&
          sponsorSorted.map((x: any, i: any) => {
            return (
              x.Logo && (
                <div
                  key={"sponsorCarousel" + i}
                  className="mx-5 my-10 max-w-fit p-6 bg-white rounded-xl"
                >
                  <a href={x.Link} target="_blank" key={x.Name}>
                    <Image
                      className="h-24 object-contain max-w-full inline-block cursor-pointer rounded-lg"
                      src={x.Logo.Url}
                      width={300}
                      height={250}
                      alt={`Logo van ${x.Name}`}
                    />
                  </a>
                </div>
              )
            );
          })}
      </Carousel>
    </div>
  );
}
