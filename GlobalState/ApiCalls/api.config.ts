import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_STRAPI_URL_comment;
export const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});
