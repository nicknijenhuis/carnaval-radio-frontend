import Link from "next/link";
import React from "react";
import ReactMarkdown from "react-markdown";
import { MdKeyboardArrowRight } from "react-icons/md";

const PostDetails = ({ post }: { post: any }) => {
  return (
    <Link href={`/articles/${post.attributes.Slug}`}>
      <div className="cursor-pointer overflow-hidden space-y-5">
        <div className="border-2 border-[#FFA500] text-center rounded py-3">
          <p className="text-lg font-bold">{post.attributes.Title}</p>
        </div>
        <img
          className="h-60 w-full object-cover rounded-lg"
          src={post.attributes?.CoverImage?.data?.attributes?.url}
          alt=""
        />
        <ReactMarkdown className=" mb-2">
          {post.attributes?.Content?.length > 200
            ? `${post.attributes.Content.substring(0, 200)}...`
            : post.attributes?.Content?.substring(0, 200)}
        </ReactMarkdown>
        <div className="flex justify-end">
          <button className="bg-[#1DC724] flex space-x-2 items-center rounded-md p-2">
            <p className="text-sm">Lees verder</p> <MdKeyboardArrowRight />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default PostDetails;
