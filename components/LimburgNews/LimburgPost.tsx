import React from "react";
import ReactHtmlParser from "html-react-parser";
import Link from "next/link";

interface props {
  item: any;
  i: any;
}

const LimburgPost = ({ item, i }: props) => {
  const formateDate = (pubDate: any) => {
    const date = pubDate.split(" ");
    const formatedDate = date.slice(0, 4).join(" ");
    return formatedDate;
  };
  return (
    <div
      className={`${`bg-${
        i % 4 === 0
          ? "tertiaryShade_2"
          : i % 4 === 1
          ? "secondayShade_2"
          : i % 4 === 2
          ? "primaryShade_3"
          : "secondayShade_2"
      }`} rounded-xl p-5 cursor-pointer overflow-hidden space-y-5 w-full`}
    >
      <div className="container">{ReactHtmlParser(item.content)}</div>
      <p className="text-sm text-gray-500">{formateDate(item.pubDate)}</p>

      <Link
        target="_blank"
        className={`flex items-center justify-center bg-white border-2 rounded-md p-2 ${
          i % 4 === 0
            ? "border-tertiary text-tertiary"
            : i % 4 === 1
            ? "border-secondary text-secondary"
            : i % 4 === 2
            ? "border-primary text-primary"
            : "border-secondary text-secondary"
        }`}
        href={item.guid}
      >
        Verder lezen op Limburg24
      </Link>
    </div>
  );
};

export default LimburgPost;
