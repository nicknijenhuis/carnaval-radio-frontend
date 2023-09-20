import Hero from "@/components/Hero/Hero";
import Sponsors from "@/components/Sponsors/Sponsors";
import PostCard from "@/components/Post/PostCard";
import { GET_ALL_ARTICLES } from "@/GlobalState/ApiCalls/graphql/article_queries";
import { client } from "@/GlobalState/ApiCalls/api.config";

const page = async () => {
  const { data } = await client.query({
    query: GET_ALL_ARTICLES,
  });
  return (
    <section className="flex-grow">
      <Hero />
      <Sponsors />
      {data && <PostCard posts={data.articles.data} />}
    </section>
  );
};

export default page;
