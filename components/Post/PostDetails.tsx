import Link from "next/link";
import React from "react";
import { Post } from "@/types/articleTypes";
import ReactHtmlParser from "html-react-parser";

const PostDetails = ({ post, i }: { post: Post; i: any }) => {
  return (
    <Link href={`/articles/${post.attributes.Slug}`} className="w-[370px]">
      <div
        className={`${
          i == 0
            ? "bg-tertiaryShade_2"
            : i == 1
            ? "bg-secondayShade_2"
            : "bg-primaryShade_3"
        }  rounded-xl p-5 cursor-pointer overflow-hidden space-y-5`}
      >
        <img
          className="h-60 w-[98%] object-cover rounded-xl"
          src={post?.attributes?.CoverImage?.data?.attributes?.url}
          alt=""
        />
        <p className="text-2xl font-bold">{post.attributes.Title}</p>
        {ReactHtmlParser(post?.attributes?.Content.substring(0, 180))}
        <button
          className={`flex items-center justify-center bg-white w-full border-2 ${
            i == 0
              ? "border-tertiary text-tertiary"
              : i == 1
              ? "border-secondary text-secondary"
              : "border-primary text-primary"
          } rounded-md p-2`}
        >
          <p className="text-sm font-semibold">Lees verder</p>
        </button>
      </div>
    </Link>
  );
};

export default PostDetails;
