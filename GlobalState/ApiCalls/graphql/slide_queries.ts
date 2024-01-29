import { gql } from "@apollo/client";

export const GET_ALL_SLIDES = gql`
  query {
    slides(sort: "updatedAt:desc", pagination: { limit: 100 }) {
      data {
        id
        attributes {
          Image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          Title
          Link
        }
      }
    }
  }
`;
