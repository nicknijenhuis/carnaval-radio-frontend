import React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { Post } from "../typings";
import { MdKeyboardArrowRight } from "react-icons/md";

interface Props {
  posts: [Post];
}

const PostCard = ({ posts }: Props) => {
  return (
    <div className="px-10 space-y-10 md:space-y-0">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 items-center">
          <div className="h-5 w-5 bg-[#FFA500]"></div>
          <h2 className="text-2xl">News</h2>
        </div>
        <button className="self-end flex items-center space-x-1 bg-[#1DC724] px-2 rounded-full">
          <p>See More</p> <MdKeyboardArrowRight />
        </button>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
       gap-3 md:gap-6 p-2 md:p-6 max-w-[1280px] m-auto"
      >
        {posts.map((post, i) => (
          <Link key={i} href={`/articles/${post.attributes.Slug}`}>
            <div className="cursor-pointer overflow-hidden space-y-5">
              <div className="border-2 border-[#FFA500] text-center rounded py-3">
                <p className="text-lg font-bold">{post.attributes.Title}</p>
              </div>
              <img
                className="h-60 w-full object-cover rounded-lg"
                src={post.attributes.CoverImage.data.attributes.url}
                alt=""
              />
              <ReactMarkdown className=" mb-2">
                {post.attributes.Content.length > 200
                  ? `${post.attributes.Content.substring(0, 200)}...`
                  : post.attributes.Content.substring(0, 200)}
              </ReactMarkdown>
              <div className="flex justify-end">
                <button className="bg-[#1DC724] flex space-x-2 items-center rounded-md p-2">
                  <p className="text-sm">Lees verder</p>{" "}
                  <MdKeyboardArrowRight />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
