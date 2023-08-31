import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GET_ALL_ARTICLES } from "../graphql/article_queries";
import { Post } from "../types/articleTypes";
import {
  Sponsor,
  SponsorType,
  GraphQLSponsor,
  GraphQLSponsorType,
} from "../types/sponsorTypes";

import Hero from "../components/Hero/Hero";
import Sponsors from "../components/Sponsors/Sponsors";
import PostCard from "../components/Post/PostCard";
import { GET_ALL_SPONSORS } from "../graphql/sponsor_queries";
import { GET_THEME_DATA } from "../graphql/theme_queries";
import { ThemeType } from "../types/themeTypes";

interface Props {
  posts: [Post];
  sponsorTypes: SponsorType[];
  sponsors: Sponsor[];
  theme: ThemeType;
}

export default function Home({ posts, sponsorTypes, sponsors, theme }: Props) {
  return (
    <div className="flex-grow">
      <Hero />
      <Sponsors sponsorTypes={sponsorTypes} sponsors={sponsors} />
      <PostCard posts={posts} />
    </div>
  );
}

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_STRAPI_URL_comment;
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export async function getServerSideProps() {
  //Get Theme from Strapi
  const { data: themeData } = await client.query({
    query: GET_THEME_DATA,
  });

  //Get Posts from Strapi
  const { data } = await client.query({
    query: GET_ALL_ARTICLES,
  });

  //Get Sponsors from Strapi
  const { data: sponsorData } = await client.query({ query: GET_ALL_SPONSORS });

  const sponsors: Sponsor[] = sponsorData.sponsors.data.map(
    (x: GraphQLSponsor) => {
      return {
        Name: x.attributes.Name,
        Link: x.attributes.Link,
        Logo: x.attributes.Logo?.data
          ? {
              Width: x.attributes.Logo.data.attributes.width,
              Height: x.attributes.Logo.data.attributes.height,
              Url: x.attributes.Logo.data.attributes.url,
            }
          : null,
        TypeID: x.attributes.Type.data.id,
      } as Sponsor;
    }
  );

  const sponsorTypes: SponsorType[] = sponsorData.sponsorTypes.data.map(
    (x: GraphQLSponsorType) => {
      return {
        Id: x.id,
        Name: x.attributes.Name,
        Order: x.attributes.Order,
        LogoSize: x.attributes.LogoSize,
      } as SponsorType;
    }
  );

  //Return Content from Strapi Queries
  return {
    props: {
      posts: data.articles.data,
      sponsorTypes,
      sponsors,
      theme: themeData.theme.data,
    },
  };
}
