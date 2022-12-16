import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Sponsors from "../components/Sponsors";
import { GET_ALL_ARTICLES} from "../graphql/quries"
import { Post } from "../typings";
import Link from "next/link";

interface Props {
  posts: [Post]
}


export default function Home({posts}: Props) {
  console.log(posts)
  return (
    <Layout>
      <main>
        <Hero />
        <Sponsors />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
       gap-3 md:gap-6 p-2 md:p-6'>
        {posts.map((post, i) => (
          <Link key={i} href={`/post/${post.attributes.Slug}`}>
            <div className='rounded-lg group cursor-pointer overflow-hidden'>
              <img
                className='h-60 w-full object-cover'
                src={post.attributes.coverPhoto.data.attributes.url} alt="" />
              <div className='flex justify-between pt-5'>
              <div>
                <p className='text-lg font-bold'>{ post.attributes.title}</p>
                <p className='text-sm'>{post.attributes.title} by { post.attributes.title}</p>
              </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      </main>
    </Layout>
  );
}

const GRAPHQL_ENDPOINT = "http://localhost:1337/graphql"

export async function getServerSideProps(){
  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });
  const {data} = await client.query({
    query: GET_ALL_ARTICLES
  })

  return{
    props: {
      posts: data.articles.data
    }
  }
}