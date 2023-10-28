import React, { ReactElement } from "react";
import Image from "next/image";
import { Indie } from "@/app/fonts/font";

interface Props {
  title: string;
  image?: any;
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
      <h2 className={`text-3xl font-semibold ${Indie.className}`}>{title}</h2>
    </div>
  );
};

export default SectionTitle;
