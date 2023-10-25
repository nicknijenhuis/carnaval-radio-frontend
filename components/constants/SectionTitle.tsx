import React, { ReactElement } from "react";
import Image from "next/image";
import { Indie } from "@/app/fonts/font";

interface Props {
  title: string;
  image: any;
  iconElement?: ReactElement;
}

const SectionTitle = ({ title, image, iconElement }: Props) => {
  return (
    <div className="flex space-x-4 items-center">
      {image && (
        <Image
          src={image}
          height={100}
          width={100}
          className="h-8 w-8"
          alt=""
        />
      )}
      {iconElement && iconElement}
      {title == "Limburg Alaaf - Limburg24" && (
        <h2
          className={`block sm:hidden md:hidden lg:hidden xl:hidden text-3xl font-semibold ${Indie.className}`}
        >
          {title.split(" ")[3]}
        </h2>
      )}
      <h2
        className={`hidden sm:block md:block lg:block xl:block 2xl:block text-3xl font-semibold ${Indie.className}`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
