import Link from "next/link";
import React from "react";
import { Post } from "@/types/articleTypes";
import ReactHtmlParser from "html-react-parser";
import { formateDate } from "../LimburgNews/LimburgPost";

const PostDetails = ({
  post,
  colorIndex,
}: {
  post: Post;
  colorIndex: number;
}) => {
  return (
    <div
      className={`${`bg-${
        colorIndex === 0
          ? "tertiaryShade_2"
          : colorIndex === 1
          ? "secondayShade_2"
          : "primaryShade_3"
      }`}  rounded-xl p-5 overflow-hidden space-y-3`}
    >
      <img
        className="h-60 w-[98%] object-cover rounded-xl"
        src={post?.attributes?.CoverImage?.data?.attributes?.url}
        alt=""
      />
      <p className="text-sm text-gray-500">
        {post.attributes?.Date
          ? formateDate(post.attributes?.Date)
          : formateDate(post.attributes.publishedAt)}
      </p>
      <p className="text-2xl font-bold">{post.attributes.Title}</p>
      {ReactHtmlParser(
        post?.attributes?.Content.substring(0, 180) +
          (post?.attributes?.Content.length > 180 ? "..." : "")
      )}
      <Link
        href={`/nieuwsberichten/${post.attributes.Slug}`}
        className={`flex items-center justify-center bg-white w-full border-2 ${
          colorIndex === 0
            ? "border-tertiary text-tertiary"
            : colorIndex === 1
            ? "border-secondary text-secondary"
            : "border-primary text-primary"
        } rounded-md p-2 text-sm font-semibold`}
      >
        Lees verder
      </Link>
    </div>
  );
};

export default PostDetails;
