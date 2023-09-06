"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_ALL_ARTICLES } from "@/GlobalState/ApiCalls/graphql/article_queries";
import PostDetails from "@/components/Post/PostDetails";
import SectionTitle from "@/components/constants/SectionTitle";
import news from "../../public/news.png";

const page = () => {
  const [posts, setPosts] = useState<any>();

  const fetchPosts = async () => {
    const { data } = await client.query({
      query: GET_ALL_ARTICLES,
    });
    setPosts(data.articles.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="px-10 space-y-10 md:space-y-0 py-10">
      <div className="flex justify-between items-center">
        <SectionTitle title="Nieuws" icon={news} />
      </div>

      {posts && (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3
   gap-3 md:gap-6 max-w-[1280px] m-auto pt-10"
        >
          {posts.map((post: any, i: any) => (
            <PostDetails key={i} post={post} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
