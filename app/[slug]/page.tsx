import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_SINGLE_PAGE } from "@/GlobalState/ApiCalls/graphql/page_queries";
import { SingleContentPage } from "@/types/pageTypes";
import ReactHtmlParser from "html-react-parser";

const page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const { error, data } = await client.query({
    query: GET_SINGLE_PAGE,
    variables: { slugUrl: slug },
  });

  let page: SingleContentPage;
  page = data.pages.data[0].attributes;

  return (
    <div className="p-10 bg-heroBackground">
      {!error && page && (
        <div className="p-8 rounded-3xl bg-white max-w-3xl">
          <h2 className="text-3xl text-primary mb-5">{page.Title}</h2>
          <div className="mb-4">{ReactHtmlParser(page.Content)}</div>
        </div>
      )}
    </div>
  );
};

export default page;
