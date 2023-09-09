"use client";
import React, { useEffect, useState } from "react";
import { Post } from "../../types/articleTypes";
import Button from "../constants/Button";
import SectionTitle from "../constants/SectionTitle";
import PostDetails from "./PostDetails";
import news from "../../public/news.png";
import { dummyposts } from "../../public/ProjectData/posts";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_ALL_ARTICLES } from "@/GlobalState/ApiCalls/graphql/article_queries";
import { useRouter } from "next/navigation";
import PostsSkeleten from "../LoadingSkeleten/PostsSkeleten";

const PostCard = () => {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>();

  const fetchPosts = async () => {
    const { loading, error, data } = await client.query({
      query: GET_ALL_ARTICLES,
    });
    setPosts(data.articles.data);
    setLoading(loading);
    setError(error);
  };

  useEffect(() => {
    fetchPosts();
  }, [error]);

  return (
    <div className="px-10 space-y-10 md:space-y-0 py-10">
      <div className="flex justify-between items-center">
        <SectionTitle title="Nieuws" icon={news} />
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3
       gap-3 md:gap-6 max-w-[1280px] m-auto pt-10"
      >
        {!loading ? (
          <>
            {posts &&
              posts.map((post: any, i: any) => (
                <>{i < 3 && <PostDetails key={i} post={post} i={i} />}</>
              ))}
          </>
        ) : (
          <PostsSkeleten />
        )}
      </div>

      <div className="flex items-center justify-center pt-8">
        <button
          onClick={() => router.push("/articles")}
          className="bg-gradient-to-r from-primary to-secondary rounded-lg py-2 px-4 text-white font-semibold"
        >
          Laad meer
        </button>
      </div>
    </div>
  );
};

export default PostCard;
