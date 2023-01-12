import { ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import { GET_ALL_SLUGS, GET_SINGLE_POST } from "../../graphql/article_queries";
import { Post, singlePost } from "../../types/articleTypes";
import ReactMarkdown from "react-markdown";

interface Props {
  post: singlePost;
  params: {
    Slug: string;
  };
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_URL,
  cache: new InMemoryCache(),
});

const Post = ({ post }: Props) => {
  return (
    <div>
      <main>
        <img
          className="w-full h-40 md:h-80 object-cover"
          src={post.CoverImage}
          alt={post.Title}
        />
        <article className="max-w-3xl mx-auto p-5 space-y-10">
          <h1 className="text-3xl mt-10 mb-3">{post.Title}</h1>
          <div className="flex items-center space-x-2">
            <img
              className="h-10 w-10 rounded-full"
              src={post.CoverImage}
              alt=""
            />
            <p className="font-extraLight text-sm">
              Blog post by <span className="text-green-600">Carnaval Radio</span>{" "}
              - Published at {new Date(post.publishedAt).toLocaleString()!}
            </p>
          </div>
          <ReactMarkdown className=" mb-2">{post.Content}</ReactMarkdown>
          <div className="mt-10"></div>
        </article>
      </main>
    </div>
  );
};

export default Post;

export async function getStaticPaths(){
  const { data } = await client.query({query: GET_ALL_SLUGS});

  const paths = data.articles.data.map((post: Post) => {
    return { params: { Slug: post.attributes.Slug}}
  })

  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps({params} : Props){
  const { data } = await client.query({
    query: GET_SINGLE_POST,
    variables: { slugUrl: params.Slug}
  });

  const attrs = data.articles.data[0].attributes;

  return {
    props: {
      post: {
        Title: attrs.Title,
        Content: attrs.Content,
        CoverImage: attrs.CoverImage.data.attributes.url,
        publishedAt: attrs.publishedAt,
      }
    }
  }

}