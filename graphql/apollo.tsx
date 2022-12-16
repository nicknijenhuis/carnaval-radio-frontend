import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { PropsWithChildren } from "react";

const GRAPHQL_ENDPOINT = "http://localhost:1337/graphql"

const StrapiApolloProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>
    {children}
  </ApolloProvider>;
};

export default StrapiApolloProvider;
