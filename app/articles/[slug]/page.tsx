import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_SINGLE_POST } from "@/GlobalState/ApiCalls/graphql/article_queries";
import Image from "next/image";
import ReactHtmlParser from "html-react-parser";
import NotFoundPage from "@/components/NotFoundPage";

export async function generateMetadata({ params }: any) {
  const articleTitle = params.slug;
  const capitalize = (str: any) => str.charAt(0).toUpperCase() + str.slice(1);
  return {
    title: `${capitalize(articleTitle)} | Carnaval Radio | 24/7 Vasteloavend Muzieek`,
  };
}

import ShareButtons, { ShareButtonsFallback } from "@/components/Socials/ShareButtons";
import { Suspense } from "react";

interface Post {
  Title: string;
  Content: string;
  CoverImage: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  publishedAt: string;
}

const page = async ({ params }: { params: { slug?: string } }) => {
  
  if(!params.slug) {
    return null;
  }
  
  const { data } = await client.query({
    query: GET_SINGLE_POST,
    variables: { slugUrl: params.slug },
  });

  if(!data.articles?.data?.[0]) {
    return null;
  }

  let post: Post = data.articles?.data?.[0]?.attributes;

  if(!post) 
    return <NotFoundPage />;

  const formatDate = (inputDate: any) => {
    const date = new Date(inputDate);
    const day = date.getUTCDate();
    const month = date.toLocaleString("nl-NL", { month: "long" });
    const year = date.getUTCFullYear();

    const formattedDate = `${day} ${month}, ${year}`;

    return <span className="text-sm">{formattedDate}</span>;
  };

  return (
    <div className="py-8 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8 bg-heroBackground">
      {post && (
        <div className="flex flex-col gap-4 max-w-3xl p-4 rounded-3xl bg-white">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-primary">
              {post.Title}
            </h2>
            {formatDate(post.publishedAt)}
          </div>
          <div className="cms-content">{ReactHtmlParser(post.Content)}</div>
          <Image
            src={post.CoverImage.data.attributes.url}
            width={1000}
            height={1000}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={post.Title}
          />
          <Suspense fallback={<ShareButtonsFallback />}>
            <ShareButtons slug={`nieuwsberichten/${params.slug}`} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default page;
