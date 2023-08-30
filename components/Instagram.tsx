import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import Button from "./constants/Button";
import SectionTitle from "./constants/SectionTitle";

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
    <div className="px-10 py-10 hidden md:flex md:flex-col">
      <div className="flex justify-between items-center">
        <SectionTitle title="Instagram Stories" icon={undefined} />
        <Button text="See More" />
      </div>

      <div className="md:grid md:grid-cols-2 py-10 gap-y-8">
        {instagramUrl.map((igPost) => (
          <div key={igPost.instaLink}>
            <InstagramEmbed url={igPost.instaLink} width={500} height={500} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instagram;
