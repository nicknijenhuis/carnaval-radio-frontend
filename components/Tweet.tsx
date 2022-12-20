import React from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Tweet = () => {
  return (
    <div
      className=" hidden md:grid md:grid-cols-4
        md:gap-6 md:p-6 md:m-auto"
    >
      <TwitterTweetEmbed
        tweetId={"1585898048068390913"}
        options={{ cards: "hidden", conversation: "none" }}
      />

      <TwitterTweetEmbed
        tweetId={"1586852609440243712"}
        options={{ cards: "hidden", conversation: "none" }}
      />

      <TwitterTweetEmbed
        tweetId={"1586852609440243712"}
        options={{ cards: "hidden", conversation: "none" }}
      />

      <TwitterTweetEmbed
        tweetId={"1586852609440243712"}
        options={{ cards: "hidden", conversation: "none" }}
      />
    </div>
  );
};

export default Tweet;
