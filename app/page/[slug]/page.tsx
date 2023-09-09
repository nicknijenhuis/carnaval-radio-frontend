"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_SINGLE_PAGE } from "@/GlobalState/ApiCalls/graphql/page_queries";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { SingleContentPage } from "@/types/pageTypes";

const page = () => {
  const params = useParams();
  const slug = params.slug;
  const [page, setPage] = useState<SingleContentPage>();

  const fetchData = async () => {
    const { data } = await client.query({
      query: GET_SINGLE_PAGE,
      variables: { slugUrl: slug },
    });

    setPage(data.pages.data[0].attributes);
  };

  useEffect(() => {
    fetchData();
    if (page) {
      document.title = `${page.Title} | 24/7 Vasteloavend Muzieek`;
    }
  }, [page]);

  return (
    <div className="p-10">
      {page && (
        <>
          <h1 className="text-3xl font-bold text-primary mb-5">{page.Title}</h1>
          <ReactMarkdown className="mb-2">{page.Content}</ReactMarkdown>
        </>
      )}
    </div>
  );
};

export default page;
