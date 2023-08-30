import React from "react";

import { Post } from "../../types/articleTypes";
import Button from "../constants/Button";
import SectionTitle from "../constants/SectionTitle";
import PostDetails from "./PostDetails";
import news from "../../public/news.png";
import { dummyposts } from "../../public/ProjectData/posts";

interface Props {
  posts: [Post];
}

const PostCard = ({ posts }: Props) => {
  return (
    <div className="px-10 space-y-10 md:space-y-0 py-10">
      <div className="flex justify-between items-center">
        <SectionTitle title="Nieuws" icon={news} />
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3
       gap-3 md:gap-6 max-w-[1280px] m-auto pt-10"
      >
        {posts.map((post: any, i: any) => (
          <PostDetails key={i} post={post} i={i} />
        ))}
      </div>
      <div className="flex items-center justify-center pt-8">
        <button className="bg-gradient-to-r from-primary to-secondary rounded-lg py-2 px-4 text-white font-semibold">
          Laad meer
        </button>
      </div>
    </div>
  );
};

export default PostCard;
