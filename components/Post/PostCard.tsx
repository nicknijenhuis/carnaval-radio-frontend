import React from "react";

import { Post } from "../../types/articleTypes";
import Button from "../constants/Button";
import SectionTitle from "../constants/SectionTitle";
import PostDetails from "./PostDetails";

interface Props {
  posts: [Post];
}

const PostCard = ({ posts }: Props) => {
  return (
    <div className="px-10 space-y-10 md:space-y-0 py-10">
      <div className="flex justify-between items-center">
        <SectionTitle title="Nieuws" />
         <Button text="See More" />
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
       gap-3 md:gap-6 max-w-[1280px] m-auto pt-10"
      >
        {posts.map((post, i) => (
           <PostDetails key={i} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostCard;
