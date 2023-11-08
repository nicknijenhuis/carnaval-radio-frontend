import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_ALL_ARTICLES } from "@/GlobalState/ApiCalls/graphql/article_queries";
import PostDetails from "@/components/Post/PostDetails";
import SectionTitle from "@/components/constants/SectionTitle";
import news from "../../public/news.png";
import { Post } from "@/types/articleTypes";
import { oldArticles } from "@/public/ProjectData/allNewsArticles";

export async function generateMetadata() {
  return {
    title: `Nieuws | Carnaval Radio | 24/7 Vasteloavend Muzieek`,
  };
}

const page = async () => {
  const { data } = await client.query({
    query: GET_ALL_ARTICLES,
  });
  let posts: Post[];
  posts = data.articles.data;

  function customSort(a: any, b: any) {
    const dateA: any = a.attributes.Date
      ? new Date(a.attributes.Date)
      : new Date(a.attributes.publishedAt);
    const dateB: any = b.attributes.Date
      ? new Date(b.attributes.Date)
      : new Date(b.attributes.publishedAt);

    // Compare the parsed dates
    return dateB - dateA;
  }

  const sortedPosts = [...posts].sort(customSort);

  const allPosts = [...sortedPosts, ...oldArticles];

  return (
    <div className="py-8 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8">
      <div className="flex justify-between items-center">
        <SectionTitle title="Nieuws" image={news} />
      </div>

      {allPosts && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-6 2xl:gap-10 pt-2 sm:pt-2 md:pt-6 lg:pt-10 xl:pt-10">
          {allPosts.map((post: any, i: any) => (
            <PostDetails
              key={"postDetail" + i}
              post={post}
              colorIndex={i % 3}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
