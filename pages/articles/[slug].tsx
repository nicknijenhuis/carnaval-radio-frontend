import { ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import Navbar from "../../components/Navbar";
import { GET_ALL_SLUGS, GET_SINGLE_POST } from "../../graphql/quries";
import { singlePost, Post } from "../../typings";
import ReactMarkdown from "react-markdown";

interface Props {
  post: singlePost;
  params: {
    slug: string;
  };
}

//className="text-xl font-light text-gray-500 mb-2"

const Post = ({ post }: Props) => {
  return (
    <div>
      <main>
        <Navbar />
        <img
          className="w-full h-40 md:h-80 object-cover"
          src={post.coverPhoto}
          alt={post.title}
        />
        <article className="max-w-3xl mx-auto p-5 space-y-10">
          <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
          <div className="flex items-center space-x-2">
            <img
              className="h-10 w-10 rounded-full"
              src={post.coverPhoto}
              alt=""
            />
            <p className="font-extraLight text-sm">
              Blog post by <span className="text-green-600">{post.author}</span>{" "}
              - Published at {new Date(post.publishedAt).toLocaleString()!}
            </p>
          </div>
          <ReactMarkdown className=" mb-2">{post.content}</ReactMarkdown>
          <div className="mt-10"></div>
        </article>
      </main>
    </div>
  );
};

export default Post;

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_STRAPI_URL;
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_ALL_SLUGS,
  });

  const paths = data.articles.data.map((post: Post) => ({
    params: {
      slug: post.attributes.Slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: Props) {
  const { data } = await client.query({
    query: GET_SINGLE_POST,
    variables: { slugUrl: params.slug },
  });

  const attrs = data.articles.data[0].attributes;

  return {
    props: {
      post: {
        title: attrs.title,
        content: attrs.content,
        coverPhoto: attrs.coverPhoto.data.attributes.url,
        author: attrs.author.data.attributes.name,
        publishedAt: attrs.publishedAt,
      },
    },
  };
}
