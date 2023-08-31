import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Sponsor, SponsorType } from "../../types/sponsorTypes";

interface Props {
  sponsorTypes: SponsorType[];
  sponsors: Sponsor[];
}

export default function SponsorCard({ sponsorTypes, sponsors }: Props) {
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
    <div className="md:max-w-[72vw] ">
      <Carousel showDots={true} responsive={responsive}>
        {sponsors.map((x, i) => {
          return (
            <div
              key={i}
              className="mx-5 my-10 max-w-[320px] p-8 bg-white rounded-xl"
            >
              <Image
                className="inline-block cursor-pointer rounded-lg"
                src={x.Logo.Url}
                width={x.Logo.Width}
                height={x.Logo.Height}
                alt={`Logo van ${x.Name}`}
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

// {sponsors.map((x) => {
//   return (
//     <li key={x.Name} className="mx-5 my-10 max-w-[320px]">
//       <Image
//         className="inline-block cursor-pointer border-2 border-[#FFA500] p-4 rounded-lg"
//         src={x.Logo.Url}
//         width={x.Logo.Width}
//         height={x.Logo.Height}
//         alt={`Logo van ${x.Name}`}
//       />
//       {x.Name}
//     </li>
//   );
// })}
