import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { InstagramEmbed } from "react-social-media-embed";

const instagramUrl = [
  {
    instaLink: "https://www.instagram.com/p/Cml6rU8tfsE/",
  },
  {
    instaLink: "https://www.instagram.com/p/CmRHGymtph-/",
  },
  {
    instaLink: "https://www.instagram.com/p/Ck9IQifg8Vz/",
  },
  {
    instaLink: "https://www.instagram.com/p/CkyhEJGqC2d/",
  },
];

const Instagram = () => {
  return (
    <div className="px-10 hidden md:flex md:flex-col">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl">Instagram Stories</h2>
        <button className="self-end flex items-center space-x-1 bg-[#FFA500] px-2 rounded-full">
          <p>See More</p> <MdKeyboardArrowRight />
        </button>
      </div>

      <div className="md:grid md:grid-cols-2 py-10">
        {instagramUrl.map((igPost) => (
          <div>
            <InstagramEmbed url={igPost.instaLink} width={500} height={600} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
