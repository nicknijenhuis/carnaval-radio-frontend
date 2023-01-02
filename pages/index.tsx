import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import { GET_ALL_ARTICLES } from "../graphql/quries";
import { Post } from "../typings";
import Link from "next/link";
import Tweet from "../components/Tweet";
import HomeHeader from "../components/HomeHeader";
import MusicComponent from "../components/Music/MusicComponent";
import Instagram from "../components/Instagram";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <main>
      <HomeHeader />
      <div className="bg-image py-10 px-5 md:px-10 2xl:px-48">
      <div className="flex flex-row items-center justify-between">
      <h1 className="bg-black text-white px-2 py-1 text-4xl uppercase">News</h1>
      <button className="bg-white text-black px-2 py-1 uppercase text-sm">View More</button>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
       gap-3 md:gap-6 p-2 md:p-6 max-w-[1280px] m-auto px-5 md:px-0"
      >
        {posts.map((post, i) => (
          <Link key={i} href={`/articles/${post.attributes.Slug}`}>
            <div className=" group cursor-pointer overflow-hidden bg-white">
              <img
                className="h-60 w-full object-cover"
                src={post.attributes.coverPhoto.data.attributes.url}
                alt=""
              />
              <div className="flex justify-between pt-5 px-2 pb-2">
                <div>
                  <p className="text-lg font-bold">{post.attributes.title}</p>
                  <p className="text-sm">
                    {post.attributes.title} by {post.attributes.title}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </div>
      <Instagram />
    </main>
  );
}

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
