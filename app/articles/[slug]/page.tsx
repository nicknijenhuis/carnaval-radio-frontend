"use client";
import { gql } from "@apollo/client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_SINGLE_POST } from "@/GlobalState/ApiCalls/graphql/article_queries";
import { singlePost } from "@/types/articleTypes";
import Image from "next/image";

const page = () => {
  const params = useParams();
  const [post, setPost] = useState<singlePost>();

  const fetchPost = async () => {
    const { data } = await client.query({
      query: GET_SINGLE_POST,
      variables: { slugUrl: params.slug },
    });

    setPost(data.articles.data[0].attributes);
  };

  useEffect(() => {
    fetchPost();
  }, []);
  console.log(post);

  const formatDate = (inputDate: any) => {
    const date = new Date(inputDate);
    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "long" }); // Get the month name
    const year = date.getUTCFullYear();

    // Create the "day/month/year" formatted string
    const formattedDate = `${day} ${month}, ${year}`;

    return <span className="text-sm">{formattedDate}</span>;
  };

  return (
    <div className="max-w-3xl pl-8 mt-10">
      {post && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-primary">
              {post.Title}
            </h2>
            {formatDate(post.publishedAt)}
          </div>
          <p>{post.Content}</p>
          {/* <div className="flex items-center gap-2">
            <span>Author</span>
            <span>{post.author.data.attributes.name}</span>
          </div> */}
          <Image
            src={post.CoverImage.data.attributes.url}
            className="h-96 w-full rounded-lg"
            width={1000}
            height={1000}
            alt={post.Title}
          />
        </div>
      )}
    </div>
  );
};

export default page;
