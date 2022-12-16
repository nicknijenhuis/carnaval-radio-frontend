import "../styles/globals.css";
import type { AppProps } from "next/app";
import StrapiApolloProvider from "../graphql/apollo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrapiApolloProvider>
      <Component {...pageProps} />
    </StrapiApolloProvider>
  );
}
