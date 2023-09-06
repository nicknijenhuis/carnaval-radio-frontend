import { gql } from "@apollo/client";

export const GET_STREAM_DATA = gql`
  query {
    streams(sort: "Order:asc", pagination: { limit: 1 }) {
      data {
        attributes {
          Link
        }
      }
    }
  }
`;
