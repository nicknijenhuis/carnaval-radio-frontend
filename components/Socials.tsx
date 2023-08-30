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
          ? "ml-5 mr-2 bg-[#f7f6f9] p-3 border-3 border-white rounded-lg"
          : "mt-8"
      }`}
    >
      {options === "sidebar" && <h2 className="font-semibold">Volg ons op:</h2>}
      <div className=" mt-1 flex items-center justify-between">
        {socialsData.map((icon, i) => (
          <Link
            href="/"
            key={i}
            className={`p-2 rounded-full ${
              options === "footer" ? "bg-[#eff0f2]" : "bg-white"
            } `}
          >
            <Image
              className={`${options === "footer" && "filter grayscale"}`}
              src={icon.iconImg}
              alt={icon.iconName}
              width={18}
              height={18}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Socials;
