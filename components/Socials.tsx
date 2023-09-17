import React from "react";
import Image from "next/image";
import Link from "next/link";

const socialsData = [
  {
    iconImg: "/icons/facebook.png",
    iconName: "Facebook",
  },
  {
    iconImg: "/icons/instagram.png",
    iconName: "Instagram",
  },
  {
    iconImg: "/icons/twitter.png",
    iconName: "Twitter",
  },
  {
    iconImg: "/icons/youtube.png",
    iconName: "Youtube",
  },
];

const Socials = ({ options }: any) => {
  return (
    <div
      className={`${
        options === "sidebar"
          ? "ml-5 mt-8 mr-5 bg-[#f7f6f9] p-4 border-3 border-white rounded-lg"
          : "mt-8"
      }`}
    >
      {options === "sidebar" && <h2 className="font-semibold">Volg ons op:</h2>}
      <div className="mt-3 flex items-center justify-between gap-1">
        {socialsData.map((icon, i) => (
          <Link
            href="/"
            key={"socialLink"+i}
            className={`p-3 rounded-full ${
              options === "footer" ? "bg-[#eff0f2]" : "bg-white"
            } `}
          >
            <Image
              className={`${options === "footer" && "filter grayscale"}`}
              src={icon.iconImg}
              alt={icon.iconName}
              width={25}
              height={25}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
