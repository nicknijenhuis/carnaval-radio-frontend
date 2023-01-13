
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface sponsorType {
  sponsorName: string;
  sponsorImage: string;
}
 

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

export default function SponsorCard() {
  
 const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
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
      <Carousel showDots={true} responsive={responsive}>
      {sponsorsData.map((sponsor, i) => (
           <div key={i} className="mx-5 my-10 max-w-[320px]">
             <Image              
              width={200}
              height={200}
              className="inline-block cursor-pointer border-2 border-[#FFA500] p-4 rounded-lg"
              src={sponsor.sponsorImage}
              alt={sponsor.sponsorName}
            />
           </div>
          ))}
      </Carousel>
    </div>
  );
}


{/*  */}