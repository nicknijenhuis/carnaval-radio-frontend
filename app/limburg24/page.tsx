import React, { Fragment } from "react";
import { Indie } from "@/app/fonts/font";
import Parser from "rss-parser";
import LimburgPost from "@/components/LimburgNews/LimburgPost";
import { BiSolidNews } from "react-icons/bi";

export async function generateMetadata() {
  return {
    title: `Limburg24 | Carnaval Radio | 24/7 Vasteloavend Muzieek`,
  };
}

const page = async () => {
  const parser: Parser = new Parser();
  
  let feed: null | any = null;
  try {
    feed = await parser.parseURL("https://limburg24.nl/limburg-alaaf/feed");
  } catch (error) {
    feed = null;
  }

  if(!feed) {
    return null;
  }

  return (
    <div className="p-10">
      <div className="flex items-center gap-2 mb-4">
        <BiSolidNews className="text-3xl text-secondary" />
        <h2 className={`text-center text-2xl font-semibold ${Indie.className}`}>
          Limburg Alaaf - Limburg24
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-6 2xl:gap-10 mt-auto pt-2 sm:pt-2 md:pt-3 lg:pt-4 xl:pt-4 w-full">
        {feed.items.map((item: any, i: any) => (
          <Fragment key={item.title + i}>
            <LimburgPost item={item} i={i} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default page;
