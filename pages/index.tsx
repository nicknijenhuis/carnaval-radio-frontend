import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_ARTICLES } from "../graphql/article_queries";
import { Post } from "../types/articleTypes";

import Hero from "../components/Hero/Hero";
import Sponsors from "../components/Sponsors/Sponsors";
import PostCard from "../components/PostCard";
import Instagram from "../components/Instagram";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="flex-grow">
      <Hero />
      <Sponsors />
      <PostCard posts={posts} />
      <Instagram />
    </div>
  );
}

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_STRAPI_URL;

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
