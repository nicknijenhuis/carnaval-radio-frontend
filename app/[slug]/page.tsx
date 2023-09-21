import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_SINGLE_PAGE } from "@/GlobalState/ApiCalls/graphql/page_queries";
import { SingleContentPage } from "@/types/pageTypes";
import ReactHtmlParser from "html-react-parser";
import { Indie } from "@/app/fonts/font";

const page = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;
  const { error, data } = await client.query({
    query: GET_SINGLE_PAGE,
    variables: { slugUrl: slug },
  });

  let page: SingleContentPage;
  page = data.pages.data?.[0]?.attributes ?? {
    Title: "404",
    Content: "Pagina niet gevonden",
  };

  
  return (
    <div className="py-8 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 bg-heroBackground">
      {!error && page && (
        <div className="p-8 rounded-3xl bg-white max-w-3xl">
          <h2
            className={`text-3xl text-primary mb-5 font-bold ${Indie.className}`}
          >
            {page.Title}
          </h2>
          <div className="mb-4">{ReactHtmlParser(page.Content)}</div>
        </div>
      )}
    </div>
  );
};

export default page;
