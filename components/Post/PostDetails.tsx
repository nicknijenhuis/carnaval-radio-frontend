import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { MdKeyboardArrowRight } from "react-icons/md";
let Bg: any;
Bg = {
  0: "greenShade_1",
  1: "secondayShade_1",
  2: "primaryShade_1",
};

let Text: any;
Text = {
  0: "green",
  1: "secondary",
  2: "primary",
};

const PostDetails = ({ post, i }: { post: any; i: any }) => {
  const bgClass = Bg[i];
  const textClass = Text[i];
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
        {/* <p
          className={`mt-2 text-xl py-1 px-2 w-fit rounded-md bg-${bgClass} text-${textClass}`}
        >
          {post.attributes.Tag}
        </p> */}
        <button
          className={`flex items-center justify-center bg-white w-full border-2 border-${textClass} text-${textClass}  rounded-md p-2`}
        >
          <p className="text-sm font-semibold">Lees verder</p>
        </button>
      </div>
    </Link>
  );
};

export default PostDetails;
