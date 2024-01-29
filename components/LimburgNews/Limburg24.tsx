import React, { Fragment } from "react";
import Parser from "rss-parser";
import LimburgPost from "./LimburgPost";

const Limburg24 = async () => {
  const parser: Parser = new Parser();

  let feed: null | any = null;
  try {
    feed = await parser.parseURL("https://limburg24.nl/limburg-alaaf/feed");
  } catch (error) {
    feed = null;
  }

  return (
    feed && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-6 2xl:gap-10 mt-auto pt-2 sm:pt-2 md:pt-3 lg:pt-4 xl:pt-4 w-full">
        {feed.items.map((item: any, i: any) => (
          <Fragment key={item.title + i}>
            {i < 3 && <LimburgPost item={item} i={i} />}
          </Fragment>
        ))}
      </div>
    )
  );
};

export default Limburg24;
