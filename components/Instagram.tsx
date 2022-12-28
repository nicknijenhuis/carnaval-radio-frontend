import React from "react";
import { InstagramEmbed } from "react-social-media-embed";

const instagramUrl = [
    {
        instaLink: "https://www.instagram.com/p/Cml6rU8tfsE/"
    },
    {
        instaLink: "https://www.instagram.com/p/CmRHGymtph-/"
    },
    {
        instaLink: "https://www.instagram.com/p/Ck9IQifg8Vz/"
    },
    {
        instaLink: "https://www.instagram.com/p/CkyhEJGqC2d/"
    },
]

const Instagram = () => {
  return (
    <div className="hidden md:grid md:grid-cols-4 md:gap-4 md:px-5 2xl:px-44 py-10">
      {
        instagramUrl.map((igPost) => (
            <div>
        <InstagramEmbed
          url={igPost.instaLink}
          width={328}
        />
      </div>
        ))
      }
    </div>
  );
};

export default Instagram;
