import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

import { GET_ALL_ARTICLES } from "../graphql/queries";
import { Post } from "../typings";
import Link from "next/link";
import { TwitterTweetEmbed } from "react-twitter-embed";

interface Props {
  posts: [Post];
}

const news = ({ posts }: Props) => {
  return (
    <section className="py-24 bg-white">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3 md:col-span-3">
          <div className="col-span-2">
            <h1 className="text-black text-center py-20">News</h1>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
gap-3 md:gap-6 p-2 md:p-6 max-w-[1280px] m-auto"
            >
              {posts.map((post, i) => (
                <Link key={i} href={`/articles/${post.attributes.Slug}`}>
                  <div className="rounded-lg group cursor-pointer overflow-hidden bg-yellow-100">
                    <img
                      className="h-60 w-full object-cover"
                      src={post.attributes.CoverImage.data.attributes.url}
                      alt=""
                    />
                    <div className="flex justify-between pt-5 px-2 pb-2">
                      <div>
                        <p className="text-lg font-bold">
                          {post.attributes.Title}
                        </p>
                        <p className="text-sm">
                          {post.attributes.Title} by {post.attributes.Title}
                        </p>
                      </div>
                      <div>
                        <img
                          className="h-10 w-10 rounded-full"
                          src={post.attributes.CoverImage.data.attributes.url}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className=" mr-3 px-3 rounded-lg">
          <div className=" hidden md:flex md:flex-col">
            <h2 className="pt-2">Tweets</h2>
            <TwitterTweetEmbed
              tweetId={"1585898048068390913"}
              options={{ cards: "hidden", conversation: "none" }}
            />

            <TwitterTweetEmbed
              tweetId={"1586852609440243712"}
              options={{ cards: "hidden", conversation: "none" }}
            />

            <TwitterTweetEmbed
              tweetId={"1586852609440243712"}
              options={{ cards: "hidden", conversation: "none" }}
            />

            <TwitterTweetEmbed
              tweetId={"1586852609440243712"}
              options={{ cards: "hidden", conversation: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default news;

const GRAPHQL_ENDPOINT = "http://localhost:1337/graphql";

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: GET_ALL_ARTICLES,
  });

  return {
    props: {
      posts: data.articles.data,
    },
  };
}