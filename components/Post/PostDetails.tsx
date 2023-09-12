import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Post } from "@/types/articleTypes";

const PostDetails = ({ post, i }: { post: Post; i: any }) => {
  return (
    <Link href={`/articles/${post.attributes.Slug}`}>
      <div
        className={`${
          i == 0
            ? "bg-greenShade_2"
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
        <ReactMarkdown className="text-[#868986] mb-2">
          {post.attributes?.Content?.length > 200
            ? `${post.attributes.Content.substring(0, 200)}...`
            : post.attributes?.Content?.substring(0, 200)}
        </ReactMarkdown>
        <button
          className={`flex items-center justify-center bg-white w-full border-2 ${
            i == 0
              ? "border-green text-green"
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
