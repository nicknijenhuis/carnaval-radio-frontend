import { ApolloClient, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactMarkdown from "react-markdown";
import { GET_ALL_SLUGS_FOR_CONTENT_PAGES, GET_SINGLE_PAGE } from "../../graphql/page_queries";
import { ContentPage, SingleContentPage } from "../../types/pageTypes";

interface Props {
  page: SingleContentPage;
  params: {
    Slug: string;
  };
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_STRAPI_URL,
  cache: new InMemoryCache(),
});

const Page = ({ page }: Props) => {
  return (
    <div>
      <main>
        <article className="max-w-3xl mx-auto p-5 space-y-10">
          <h1 className="text-3xl mt-10 mb-3">{page.Title}</h1>
          <div className="flex items-center space-x-2">
          </div>
          <ReactMarkdown className=" mb-2">{page.Content}</ReactMarkdown>
          <div className="mt-10"></div>
        </article>
      </main>
    </div>
  );
};

export default Page;

export async function getStaticPaths(){
  const { data } = await client.query({query: GET_ALL_SLUGS_FOR_CONTENT_PAGES});

  const paths = data.pages.data.map((page: ContentPage) => {
    return { params: { Slug: page.attributes.Slug}}
  })

  return {
    paths,
    fallback: false
  }
};

export async function getStaticProps({params} : Props){
  const { data } = await client.query({
    query: GET_SINGLE_PAGE,
    variables: { slugUrl: params.Slug}
  });

  const attrs = data.pages.data[0].attributes;

  return {
    props: {
      page: {
        Title: attrs.Title,
        Content: attrs.Content
      }
    } as Props
  }
}