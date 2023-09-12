import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_SINGLE_PAGE } from "@/GlobalState/ApiCalls/graphql/page_queries";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { SingleContentPage } from "@/types/pageTypes";

const page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const { loading, error, data } = await client.query({
    query: GET_SINGLE_PAGE,
    variables: { slugUrl: slug },
  });

  let page: SingleContentPage;
  page = data.pages.data[0].attributes;

  return (
    <div className="p-10">
      {!error && page && (
        <>
          <h1 className="text-3xl font-bold text-primary mb-5">{page.Title}</h1>
          <ReactMarkdown className="mb-2">{page.Content}</ReactMarkdown>
        </>
      )}
    </div>
  );
};

export default page;
