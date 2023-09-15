import { Post } from "../../types/articleTypes";
import SectionTitle from "../constants/SectionTitle";
import PostDetails from "./PostDetails";
import news from "../../public/news.png";
import { client } from "@/GlobalState/ApiCalls/api.config";
import { GET_ALL_ARTICLES } from "@/GlobalState/ApiCalls/graphql/article_queries";
import PostsSkeleten from "../LoadingSkeleten/PostsSkeleten";
import Link from "next/link";

const PostCard = async () => {
  let isLoading = true;
  const { loading, error, data } = await client.query({
    query: GET_ALL_ARTICLES,
  });

  let posts: Post[];
  posts = data.articles.data;
  isLoading = loading;

  return (
    <div className="px-10 space-y-10 md:space-y-0 py-10">
      <div className="flex justify-between items-center">
        <SectionTitle title="Nieuws" icon={news} />
      </div>

      <div
        className="flex justify-start flex-wrap
       gap-3 md:gap-6 m-auto pt-2 sm:pt-2 md:pt-6 lg:pt-10 xl:pt-10"
      >
        {!isLoading ? (
          <>
            {posts &&
              posts.map((post: any, i: any) => (
                <>{i < 3 && <PostDetails key={i} post={post} i={i} />}</>
              ))}
          </>
        ) : (
          <PostsSkeleten />
        )}
      </div>

      <div className="flex items-center justify-center pt-8">
        <Link
          href="/articles"
          className="bg-gradient-to-r from-primary to-secondary rounded-lg py-2 px-4 text-white font-semibold"
        >
          Laad meer
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
