import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_SINGLE_POST } from "@/GlobalState/ApiCalls/graphql/article_queries";
import Image from "next/image";
import ReactHtmlParser from "html-react-parser";
import ShareButtons from "@/components/Socials/ShareButtons";

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

  let post: Post = data.articles.data[0].attributes;

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
            className="h-48 sm:h-64 md:h-96 lg:h-96 xl:h-96 w-full rounded-lg"
            width={1000}
            height={1000}
            alt={post.Title}
          />
          <ShareButtons slug={`nieuwsberichten/${params.slug}`} />
        </div>
      )}
    </div>
  );
};

export default page;
