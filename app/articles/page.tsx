import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_ALL_ARTICLES } from "@/GlobalState/ApiCalls/graphql/article_queries";
import PostDetails from "@/components/Post/PostDetails";
import SectionTitle from "@/components/constants/SectionTitle";
import news from "../../public/news.png";
import { Post } from "@/types/articleTypes";

const page = async () => {
  const { data } = await client.query({
    query: GET_ALL_ARTICLES,
  });
  let posts: Post[];
  posts = data.articles.data;

  return (
    <div className="py-8 px-4 sm:px-4 md:px-8 lg:px-8 xl:px-8">
      <div className="flex justify-between items-center">
        <SectionTitle title="Nieuws" icon={news} />
      </div>

      {posts && (
        <div
          className="flex justify-start flex-wrap
          gap-3 md:gap-6 m-auto pt-2 sm:pt-2 md:pt-6 lg:pt-10 xl:pt-10"
        >
          {posts.map((post: any, i: any) => (
            <PostDetails key={"postDetail"+i} post={post} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default page;
